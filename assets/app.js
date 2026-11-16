/* FunTime COPY — KochTime */
(() => {
  'use strict';

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const rub = n => {
    const v = Number(n) || 0;
    const frac = Math.abs(v - Math.round(v)) > 0.001;
    return v.toLocaleString('ru-RU', {
      minimumFractionDigits: frac ? 2 : 0,
      maximumFractionDigits: 2
    }) + ' ₽';
  };
  const round2 = n => Math.round(n * 100) / 100;
  const fmtInt = n => Number(n).toLocaleString('ru-RU');

  /* ---------------- header + mobile nav ---------------- */
  const header = $('#header');
  const burger = $('#burger');
  const nav = $('#nav');

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const closeNav = () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('.nav a', nav).forEach(a => a.addEventListener('click', closeNav));
  window.addEventListener('resize', () => { if (innerWidth > 900) closeNav(); });

  /* ---------------- toast ---------------- */
  let toastTimer;
  const toastEl = $('#toast');
  function toast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-show'), 2600);
  }

  /* ---------------- copy IP ---------------- */
  const ipCard = $('#ipCard');
  const hint = $('#ipHint');

  async function copyIp(ip) {
    try {
      await navigator.clipboard.writeText(ip);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = ip;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    toast('IP скопирован: ' + ip);
    if (ipCard) {
      ipCard.classList.add('is-copied');
      const original = hint.innerHTML;
      hint.textContent = 'скопировано!';
      setTimeout(() => {
        ipCard.classList.remove('is-copied');
        hint.innerHTML = original;
      }, 1800);
    }
  }

  $$('[data-ip]').forEach(el => {
    el.addEventListener('click', () => copyIp(el.dataset.ip));
  });

  /* ---------------- tabs ---------------- */
  const tabs = $$('.tab');
  const panels = $$('.panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === tab.dataset.tab));
      revealScan();
    });
  });

  /* ---------------- cart state ---------------- */
  const STORAGE_KEY = 'ftcopy_cart_v1';
  let cart = [];

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(saved)) cart = saved.filter(i => i && i.id && Number(i.price) > 0);
  } catch { /* ignore */ }

  const drawer = $('#cart');
  const cartItemsEl = $('#cartItems');
  const cartEmptyEl = $('#cartEmpty');
  const totalEl = $('#cartTotal');
  const oldEl = $('#cartOld');
  const countEls = $$('[data-count]');
  const payBtn = $('#payBtn');
  const form = $('#checkoutForm');

  const totals = () => cart.reduce((acc, i) => {
    acc.price += Number(i.price);
    acc.old += Number(i.old || i.price);
    return acc;
  }, { price: 0, old: 0 });

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch { /* ignore */ }
  }

  function renderCart() {
    const { price, old } = totals();
    countEls.forEach(el => el.textContent = cart.length);
    totalEl.textContent = rub(price);
    oldEl.textContent = rub(old);
    oldEl.style.display = old > price ? '' : 'none';

    cartEmptyEl.style.display = cart.length ? 'none' : 'flex';
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item" data-cart-id="${item.id}">
        <div>
          <b>${item.name}</b>
          <span>${rub(Number(item.price))}<s>${rub(Number(item.old || item.price))}</s></span>
        </div>
        <span class="cart-item__sum">${rub(Number(item.price))}</span>
        <button class="cart-item__del" data-remove="${item.id}" aria-label="Убрать ${item.name}">✕</button>
      </div>
    `).join('');

    payBtn.disabled = cart.length === 0;
    payBtn.textContent = cart.length ? `Оплатить ${rub(price)}` : 'Оплатить';
  }

  /* ---------------- privilege term ---------------- */
  const TERM_LABEL = { '30': '30 дней', '90': '90 дней', forever: 'навсегда' };
  const TERM_MULT  = { '30': 1, '90': 2, forever: 8 };
  let term = '30';

  function rankCards() {
    return $$('.cards--ranks [data-id]');
  }

  function applyTerm() {
    rankCards().forEach(card => {
      const base = Number(card.dataset.price);
      const price = round2(base * TERM_MULT[term]);
      const priceEl = card.querySelector('.card__price b');
      if (priceEl) priceEl.textContent = rub(price);
      const tokEl = card.querySelector('.card__tokens');
      if (tokEl) tokEl.textContent = fmtInt(Math.round(price * 1000)) + ' токенов · ' + TERM_LABEL[term];
    });
  }

  $$('.term').forEach(btn => {
    btn.addEventListener('click', () => {
      term = btn.dataset.term;
      $$('.term').forEach(b => b.classList.toggle('is-active', b === btn));
      applyTerm();
    });
  });
  applyTerm();

  function addToCart(btn) {
    const holder = btn.closest('[data-id]');
    if (!holder) return;

    const isRank = !!holder.closest('.cards--ranks');
    const mult = isRank ? TERM_MULT[term] : 1;
    const basePrice = Number(holder.dataset.price);
    const price = round2(basePrice * mult);
    const old = round2(Number(holder.dataset.old || basePrice) * mult);
    const name = holder.dataset.name + (isRank ? ' · ' + TERM_LABEL[term] : '');
    const id = holder.dataset.id + (isRank && term !== '30' ? '-' + term : '');

    if (cart.some(i => i.id === id)) {
      toast('«' + name + '» уже в корзине');
      openCart();
      return;
    }

    cart.push({ id, name, price, old });
    save();
    renderCart();
    toast('«' + name + '» добавлен · ' + rub(price));

    btn.textContent = 'Добавлено ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'В корзину';
      btn.disabled = false;
    }, 1200);
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (btn) addToCart(btn);
  });

  cartItemsEl.addEventListener('click', e => {
    const del = e.target.closest('[data-remove]');
    if (!del) return;
    cart = cart.filter(i => i.id !== del.dataset.remove);
    save();
    renderCart();
    toast('Товар убран из корзины');
  });

  /* ---------------- drawer ---------------- */
  function openCart() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    closeNav();
    setTimeout(() => $('.drawer__body').scrollTop = 0, 60);
  }

  function closeCart() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
  }

  $$('[data-close-cart]').forEach(el => el.addEventListener('click', closeCart));
  $$('[data-open-cart]').forEach(el => el.addEventListener('click', openCart));
  drawer.querySelector('.drawer__panel').addEventListener('click', e => e.stopPropagation());

  /* ---------------- checkout ---------------- */
  const nickInput = form.elements.nick;

  nickInput.addEventListener('input', () => {
    nickInput.classList.remove('is-invalid');
    nickInput.value = nickInput.value.replace(/[^A-Za-z0-9_]/g, '');
  });

  const DONATE_URL = 'https://donatex.gg/donate/zwezdak22';

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!cart.length) return;

    const nick = nickInput.value.trim();
    if (nick.length < 3) {
      nickInput.classList.add('is-invalid');
      nickInput.focus();
      toast('Введи ник от 3 до 16 символов');
      return;
    }

    const pay = form.querySelector('input[name="pay"]:checked')?.value || 'СБП';
    const { price } = totals();
    const names = cart.map(i => i.name).join(', ');

    window.open(DONATE_URL, '_blank', 'noopener');

    $('#successTitle').textContent = 'Оплата на DonateX';
    $('#successText').innerHTML =
      `Игрок <b>${nick}</b> · ${pay}<br>` +
      `${names}<br>` +
      `Сумма: <span style="color:#b6ff3a;font-weight:700">${rub(price)}</span><br>` +
      `<span style="font-size:12px;color:#8f87aa">Укажи ник <b>${nick}</b> в комментарии к платежу — токены и товар зачислим автоматически.</span>`;

    openModal();
    payBtn.textContent = 'Оплатить ' + rub(price);
    closeCart();
  });

  /* ---------------- success modal ---------------- */
  const modal = $('#success');

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
  }
  $$('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (modal.classList.contains('is-open')) closeModal();
    else if (drawer.classList.contains('is-open')) closeCart();
    else closeNav();
  });

  /* ---------------- reveal on scroll ---------------- */
  let io;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }

  function revealScan() {
    $$('.reveal:not(.is-in)').forEach(el => {
      if (io) io.observe(el);
      else el.classList.add('is-in');
    });
  }
  revealScan();

  /* ---------------- animate ratio bars ---------------- */
  const bars = $$('.ratio__fill');
  if (bars.length) {
    const barIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.width = entry.target.dataset.w + '%';
        barIO.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    bars.forEach(b => barIO.observe(b));
  }

  /* ---------------- token calculator ---------------- */
  const RATE = 0.001; // ₽ за 1 токен
  const tokInput = $('#tokInput');
  const rubInput = $('#rubInput');
  const tokRange = $('#tokRange');
  const calcHint = $('#calcHint');
  const calcPay = $('#calcPay');

  function syncCalc(tokens, source) {
    const t = Math.max(0, Math.round(Number(tokens) || 0));
    const price = round2(t * RATE);

    if (source !== 'tok') tokInput.value = t;
    if (source !== 'rub') rubInput.value = price;

    tokRange.value = Math.min(Number(tokRange.max), t);
    tokRange.style.setProperty('--fill', (Number(tokRange.value) / Number(tokRange.max) * 100) + '%');
    calcHint.textContent = fmtInt(t) + ' токенов · ' + rub(price);
    calcPay.textContent = 'Оплатить ' + rub(price) + ' на DonateX';
  }

  if (tokInput && rubInput) {
    tokInput.addEventListener('input', () => syncCalc(tokInput.value, 'tok'));
    rubInput.addEventListener('input', () => syncCalc(Math.round((Number(rubInput.value) || 0) / RATE), 'rub'));
    tokRange.addEventListener('input', () => syncCalc(tokRange.value, 'range'));
    $$('[data-tok]').forEach(chip => {
      chip.addEventListener('click', () => syncCalc(chip.dataset.tok, 'tok'));
    });
    syncCalc(tokInput.value, 'tok');
  }

  renderCart();
})();