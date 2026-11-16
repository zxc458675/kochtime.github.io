<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FunTime COPY — анархия-сервер. Цены в 20 раз ниже</title>
<meta name="description" content="FunTime COPY — неофициальная копия FunTime. Те же режимы, кейсы и привилегии, но цены в 20 раз ниже. Анархия 101, дуэли, казино.">
<meta name="theme-color" content="#08060f">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230b0912'/%3E%3Crect x='7' y='7' width='8' height='8' fill='%238b5cf6'/%3E%3Crect x='17' y='7' width='8' height='8' fill='%23ff2f8d'/%3E%3Crect x='7' y='17' width='8' height='8' fill='%2338e8ff'/%3E%3Crect x='17' y='17' width='8' height='8' fill='%23b6ff3a'/%3E%3C/svg%3E">
</head>
<body>

<div class="bg-fx" aria-hidden="true">
  <div class="bg-grid"></div>
  <div class="bg-glow bg-glow--1"></div>
  <div class="bg-glow bg-glow--2"></div>
  <div class="bg-glow bg-glow--3"></div>
  <div class="bg-noise"></div>
</div>

<header class="header" id="header">
  <div class="container header__inner">
    <a class="logo" href="#top" aria-label="FunTime COPY — на главную">
      <span class="logo__cube" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
      <span class="logo__text">
        <span class="logo__name">FUNTIME<span class="logo__copy">COPY</span></span>
        <span class="logo__sub">KochTime project</span>
      </span>
    </a>

    <nav class="nav" id="nav" aria-label="Основная навигация">
      <a href="#shop" class="nav__link">Магазин</a>
      <a href="#modes" class="nav__link">Режимы</a>
      <a href="#why" class="nav__link">Почему дешевле</a>
      <a href="#faq" class="nav__link">FAQ</a>
      <a href="#support" class="nav__link">Сервер</a>
      <a href="#shop" class="btn btn--sm btn--primary nav__cta">Играть</a>
    </nav>

    <div class="header__side">
      <button class="cart-btn" data-open-cart aria-label="Открыть корзину">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        <span class="cart-btn__count" data-count>0</span>
      </button>
      <button class="burger" id="burger" aria-label="Открыть меню" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<main id="top">

  <!-- HERO -->
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <div class="badge-row reveal">
          <span class="badge badge--hot">1:1 копия FunTime</span>
          <span class="badge badge--lime">цены ÷ 20</span>
          <span class="badge">неофициальный фан-проект</span>
        </div>

        <h1 class="hero__title reveal">
          Тот же <span class="grad">FunTime</span>.<br>
          Только в <span class="grad grad--lime">20 раз</span><br>
          дешевле.
        </h1>

        <p class="hero__lead reveal">
          Анархия 101, кланы, аукцион, трапы и кейсы — всё как на оригинале.
          Мы не платим за бренд, поэтому привилегии, кейсы и валюта стоят
          ровно <b>в двадцать раз меньше</b>.
        </p>

        <div class="hero__actions reveal">
          <a href="#shop" class="btn btn--primary btn--lg">Смотреть магазин</a>
          <a href="#modes" class="btn btn--ghost btn--lg">Как играть</a>
          <a href="https://zxc458675.github.io/kochtime.github.io/" class="btn btn--ghost btn--lg" target="_blank" rel="noopener">Наш сайт</a>
        </div>

        <button class="ip-card reveal" id="ipCard" data-ip="chords-ivory.tun.ply.gg">
          <span class="ip-card__label">IP сервера</span>
          <span class="ip-card__value">chords-ivory.tun.ply.gg</span>
          <span class="ip-card__hint" id="ipHint">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
            копировать
          </span>
        </button>

        <div class="hero__stats reveal">
          <div class="stat"><b>99,9%</b><span>аптайм за месяц</span></div>
          <div class="stat"><b>56 214</b><span>кейсов открыто</span></div>
          <div class="stat"><b>×20</b><span>дешевле оригинала</span></div>
        </div>
      </div>

      <div class="hero__visual reveal">
        <div class="hero__frame">
          <img src="assets/hero.svg" alt="Анархия-мир FunTime COPY: неоновый воксельный остров" width="800" height="920" loading="eager">
          <div class="hero__frame-glow"></div>
        </div>
        <div class="float-card float-card--1">
          <span class="float-card__k">Скидка на всё</span>
          <b>-95%</b>
        </div>
        <div class="float-card float-card--2">
          <span class="float-card__k">Топ-ранг</span>
          <b>139,95 ₽</b>
          <s>2 799 ₽</s>
        </div>
      </div>
    </div>

    <div class="ticker" aria-hidden="true">
      <div class="ticker__track">
        <span>Копия FunTime</span><i>◆</i><span>Привилегии ÷20</span><i>◆</i><span>Кейсы — 5 ₽</span><i>◆</i>
        <span>Анархия 101</span><i>◆</i><span>250 слотов</span><i>◆</i><span>Без вайпов</span><i>◆</i>
        <span>Копия FunTime</span><i>◆</i><span>Привилегии ÷20</span><i>◆</i><span>Кейсы — 5 ₽</span><i>◆</i>
        <span>Анархия 101</span><i>◆</i><span>250 слотов</span><i>◆</i><span>Без вайпов</span><i>◆</i>
      </div>
    </div>
  </section>

  <!-- SHOP -->
  <section class="section" id="shop">
    <div class="container">
      <div class="section__head reveal">
        <span class="kicker">Магазин</span>
        <h2 class="section__title">Прайс в <span class="grad">токенах</span></h2>
        <p class="section__lead">
          Курс простой: <b>10 000 токенов = 10 ₽</b>, то есть 1 000 токенов за рубль.
          Никаких скрытых наценок. Оплата на DonateX.
        </p>
      </div>

      <!-- CALCULATOR -->
      <div class="calc reveal" id="calc">
        <div class="calc__head">
          <span class="kicker">Калькулятор</span>
          <h3>Посчитай донат за 5 секунд</h3>
          <p>Введи токены или рубли — сумма пересчитается сама.</p>
        </div>

        <div class="calc__body">
          <div class="calc__side">
            <label class="calc__lab" for="tokInput">Токены</label>
            <div class="calc__field">
              <input id="tokInput" type="number" min="0" step="1000" value="10000" inputmode="numeric">
              <span>токенов</span>
            </div>
            <input type="range" id="tokRange" class="range" min="0" max="2000000" step="1000" value="10000" aria-label="Количество токенов">
            <div class="calc__chips">
              <button type="button" data-tok="1000">1 000</button>
              <button type="button" data-tok="5000">5 000</button>
              <button type="button" data-tok="10000">10 000</button>
              <button type="button" data-tok="50000">50 000</button>
              <button type="button" data-tok="100000">100 000</button>
            </div>
          </div>

          <div class="calc__eq" aria-hidden="true">=</div>

          <div class="calc__side calc__side--res">
            <label class="calc__lab" for="rubInput">К оплате, ₽</label>
            <div class="calc__field calc__field--rub">
              <input id="rubInput" type="number" min="0" step="1" value="10" inputmode="decimal">
              <span>₽</span>
            </div>
            <p class="calc__hint" id="calcHint">10 000 токенов · 10 ₽</p>
            <a class="btn btn--primary btn--block" href="https://donatex.gg/donate/zwezdak22" target="_blank" rel="noopener" id="calcPay">
              Оплатить на DonateX
            </a>
          </div>
        </div>

        <p class="calc__note">
          Оплата проходит на DonateX. В комментарии к платежу укажи свой ник —
          токены зачислим в течение 5 минут.
        </p>
      </div>

      <div class="rate-strip reveal">
        <span><b>1 000</b> токенов = <b>1</b> ₽</span>
        <span><b>10 000</b> токенов = <b>10</b> ₽</span>
        <a href="https://donatex.gg/donate/zwezdak22" target="_blank" rel="noopener">DonateX ↗</a>
      </div>

      <div class="tabs" role="tablist" aria-label="Категории товаров">
        <button class="tab is-active" role="tab" aria-selected="true" data-tab="priv">Привилегии <span class="tab__num">11</span></button>
        <button class="tab" role="tab" aria-selected="false" data-tab="cases">Кейсы <span class="tab__num">50</span></button>
        <button class="tab" role="tab" aria-selected="false" data-tab="coins">Токены</button>
        <button class="tab" role="tab" aria-selected="false" data-tab="misc">Услуги</button>
      </div>

      <div class="panel is-active" data-panel="priv">
        <div class="shop-terms">
          <span class="shop-terms__label">Срок привилегии</span>
          <div class="term-row" role="group" aria-label="Срок привилегии">
            <button type="button" class="term is-active" data-term="30">30 дней</button>
            <button type="button" class="term" data-term="90">90 дней</button>
            <button type="button" class="term" data-term="forever">Навсегда</button>
          </div>
          <span class="shop-terms__hint">цена пересчитывается автоматически</span>
        </div>

        <div class="cards cards--ranks">

          <article class="card" data-id="baron" data-name="Барон" data-price="2.45" data-old="49" data-tokens="2450">
            <div class="card__top"><span class="card__tag">I ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Барон</h3>
            <p class="card__desc">Старт: зарплата, смена позы и первые плюшки.</p>
            <ul class="card__list">
              <li>Префикс <b>[Барон]</b> в чате и табе</li>
              <li>/kit baron — набор Барона</li>
              <li>/salary — зарплата</li>
              <li>/crawl — смена позы</li>
              <li>2 точки дома · 6 слотов аукциона</li>
            </ul>
            <div class="card__price"><b>2,45 ₽</b><s>49 ₽</s></div>
            <div class="card__tokens">2 450 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="strazh" data-name="Страж" data-price="4.45" data-old="89" data-tokens="4450">
            <div class="card__top"><span class="card__tag">II ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Страж</h3>
            <p class="card__desc">Чуть больше дома и быстрее телепорт.</p>
            <ul class="card__list">
              <li>Префикс <b>[Страж]</b> в чате и табе</li>
              <li>/kit strazh — набор Стража</li>
              <li>/salary — повышенная зарплата</li>
              <li>3 точки дома · 8 слотов аукциона</li>
              <li>Задержка телепорта 6 сек</li>
            </ul>
            <div class="card__price"><b>4,45 ₽</b><s>89 ₽</s></div>
            <div class="card__tokens">4 450 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="geroy" data-name="Герой" data-price="6.95" data-old="139" data-tokens="6950">
            <div class="card__top"><span class="card__tag">III ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Герой</h3>
            <p class="card__desc">Универсальный ранг для активной игры.</p>
            <ul class="card__list">
              <li>Префикс <b>[Герой]</b> в чате и табе</li>
              <li>/kit geroy — набор Героя</li>
              <li>/salary и /crawl</li>
              <li>4 региона · 10 слотов аукциона</li>
              <li>Задержка телепорта 5 сек</li>
            </ul>
            <div class="card__price"><b>6,95 ₽</b><s>139 ₽</s></div>
            <div class="card__tokens">6 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="aspid" data-name="Аспид" data-price="8.95" data-old="179" data-tokens="8950">
            <div class="card__top"><span class="card__tag">IV ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Аспид</h3>
            <p class="card__desc">Больше регионов и почти нет задержки.</p>
            <ul class="card__list">
              <li>Префикс <b>[Аспид]</b> в чате и табе</li>
              <li>/kit aspid — набор Аспида</li>
              <li>/salary, /crawl, /hat</li>
              <li>5 регионов · 14 слотов аукциона</li>
              <li>Задержка телепорта 4 сек</li>
            </ul>
            <div class="card__price"><b>8,95 ₽</b><s>179 ₽</s></div>
            <div class="card__tokens">8 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card card--featured" data-id="skvid" data-name="Сквид" data-price="13.95" data-old="279" data-tokens="13950">
            <span class="card__ribbon">выбор игроков</span>
            <div class="card__top"><span class="card__tag">V ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Сквид</h3>
            <p class="card__desc">Средний ранг: комфорт без переплаты.</p>
            <ul class="card__list">
              <li>Префикс <b>[Сквид]</b> + цвет ника</li>
              <li>/kit skvid — усиленный набор</li>
              <li>6 регионов · 18 слотов аукциона</li>
              <li>/back после смерти</li>
              <li>Задержка телепорта 3 сек</li>
            </ul>
            <div class="card__price"><b>13,95 ₽</b><s>279 ₽</s></div>
            <div class="card__tokens">13 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="glava" data-name="Глава" data-price="18.95" data-old="379" data-tokens="18950">
            <div class="card__top"><span class="card__tag">VI ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Глава</h3>
            <p class="card__desc">Регионы, жирный кит и быстрый телепорт.</p>
            <ul class="card__list">
              <li>Префикс <b>[Глава]</b> + свечение</li>
              <li>/kit glava — набор Главы</li>
              <li>8 регионов · 22 слота аукциона</li>
              <li>5 кейсов «Легендарный» в подарок</li>
            </ul>
            <div class="card__price"><b>18,95 ₽</b><s>379 ₽</s></div>
            <div class="card__tokens">18 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="elita" data-name="Элита" data-price="28.95" data-old="579" data-tokens="28950">
            <div class="card__top"><span class="card__tag">VII ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Элита</h3>
            <p class="card__desc">Для тех, кто живёт на сервере, а не заходит.</p>
            <ul class="card__list">
              <li>Префикс <b>[Элита]</b> с градиентом</li>
              <li>/kit elita — набор Элиты</li>
              <li>10 регионов · 26 слотов аукциона</li>
              <li>10 кейсов «FunTime» в подарок</li>
            </ul>
            <div class="card__price"><b>28,95 ₽</b><s>579 ₽</s></div>
            <div class="card__tokens">28 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="titan" data-name="Титан" data-price="38.95" data-old="779" data-tokens="38950">
            <div class="card__top"><span class="card__tag">VIII ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Титан</h3>
            <p class="card__desc">Почти максимум: всё быстрее и больше.</p>
            <ul class="card__list">
              <li>Префикс <b>[Титан]</b> + анимация</li>
              <li>/kit titan — набор Титана</li>
              <li>14 регионов · 30 слотов аукциона</li>
              <li>15 кейсов «FunTime» в подарок</li>
            </ul>
            <div class="card__price"><b>38,95 ₽</b><s>779 ₽</s></div>
            <div class="card__tokens">38 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="prints" data-name="Принц" data-price="48.95" data-old="979" data-tokens="48950">
            <div class="card__top"><span class="card__tag">IX ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Принц</h3>
            <p class="card__desc">Королевский набор возможностей.</p>
            <ul class="card__list">
              <li>Префикс <b>[Принц]</b> + частицы</li>
              <li>Все киты предыдущих рангов</li>
              <li>16 регионов · 35 слотов аукциона</li>
              <li>Приоритетный вход на сервер</li>
              <li>20 кейсов «FunTime» в подарок</li>
            </ul>
            <div class="card__price"><b>48,95 ₽</b><s>979 ₽</s></div>
            <div class="card__tokens">48 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="knyaz" data-name="Князь" data-price="64.95" data-old="1299" data-tokens="64950">
            <div class="card__top"><span class="card__tag">X ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Князь</h3>
            <p class="card__desc">Максимум без компромиссов.</p>
            <ul class="card__list">
              <li>Префикс <b>[Князь]</b> + звук входа</li>
              <li>Все киты + /kit knyaz</li>
              <li>20 регионов · 40 слотов аукциона</li>
              <li>Телепорт без задержки</li>
              <li>30 кейсов «FunTime» в подарок</li>
            </ul>
            <div class="card__price"><b>64,95 ₽</b><s>1 299 ₽</s></div>
            <div class="card__tokens">64 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card card--ultra" data-id="gercog" data-name="Герцог" data-price="139.95" data-old="2799" data-tokens="139950">
            <span class="card__ribbon card__ribbon--lime">топ сервера</span>
            <div class="card__top"><span class="card__tag">XI ступень</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Герцог</h3>
            <p class="card__desc">Максимальный ранг. Все возможности сервера.</p>
            <ul class="card__list">
              <li>Уникальный префикс <b>[Герцог]</b></li>
              <li>Все киты и все команды</li>
              <li>Безлимит регионов и слотов аукциона</li>
              <li>/tp без задержки</li>
              <li>50 кейсов «FunTime» в подарок</li>
              <li>Личный менеджер поддержки</li>
            </ul>
            <div class="card__price"><b>139,95 ₽</b><s>2 799 ₽</s></div>
            <div class="card__tokens">139 950 токенов · 30 дней</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

        </div>

        <p class="staff-note">
          По умолчанию привилегии покупаются на <b>30 дней</b>. Переключатель срока над карточками
          пересчитывает цену: 90 дней — ×2, «Навсегда» — ×8. Токены списываются по курсу
          1 000 токенов = 1 ₽.
        </p>
      </div>

      <div class="panel" data-panel="cases">
        <article class="case-bundle case-bundle--solo" data-id="case-bundle" data-name="50 кейсов (рандом)" data-price="5" data-old="250">
          <div class="case-bundle__glow" aria-hidden="true"></div>
          <div class="case-bundle__main">
            <span class="case-bundle__tag">пакет · рандом</span>
            <h3>50 кейсов</h3>
            <p>Пакет из 50 случайных кейсов: содержимое и дроп не выбираются. Один пакет — одна цена.</p>
            <div class="case-bundle__tags"><span>50 штук</span><span>дроп рандомный</span><span>5 ₽ за пакет</span></div>
          </div>
          <div class="case-bundle__buy">
            <div class="case-bundle__price"><b>5 ₽</b><s>250 ₽</s></div>
            <button class="btn btn--primary" data-add>В корзину</button>
          </div>
        </article>
      </div>

      <div class="panel" data-panel="coins">
        <div class="cards">

          <article class="card" data-id="tok-1k" data-name="1 000 токенов" data-price="1" data-old="1" data-tokens="1000">
            <div class="card__top"><span class="card__tag">Токены</span><span class="card__save">курс 1:1 ₽</span></div>
            <h3 class="card__name">1 000 <span class="muted">токенов</span></h3>
            <p class="card__desc">Проба пера: один кейс или часть привилегии.</p>
            <div class="card__price"><b>1 ₽</b></div>
            <div class="card__tokens">1 000 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="tok-5k" data-name="5 000 токенов" data-price="5" data-old="5" data-tokens="5000">
            <div class="card__top"><span class="card__tag">Токены</span><span class="card__save">курс 1:1 ₽</span></div>
            <h3 class="card__name">5 000 <span class="muted">токенов</span></h3>
            <p class="card__desc">Ровно на один кейс.</p>
            <div class="card__price"><b>5 ₽</b></div>
            <div class="card__tokens">5 000 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card card--featured" data-id="tok-10k" data-name="10 000 токенов" data-price="10" data-old="10" data-tokens="10000">
            <span class="card__ribbon">как в примере</span>
            <div class="card__top"><span class="card__tag">Токены</span><span class="card__save">курс 1:1 ₽</span></div>
            <h3 class="card__name">10 000 <span class="muted">токенов</span></h3>
            <p class="card__desc">Тот самый курс: 10 000 токенов = 10 рублей.</p>
            <div class="card__price"><b>10 ₽</b></div>
            <div class="card__tokens">10 000 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="tok-50k" data-name="50 000 токенов" data-price="50" data-old="50" data-tokens="50000">
            <div class="card__top"><span class="card__tag">Токены</span><span class="card__save">курс 1:1 ₽</span></div>
            <h3 class="card__name">50 000 <span class="muted">токенов</span></h3>
            <p class="card__desc">Хватит на 10 кейсов или ранг «Герой».</p>
            <div class="card__price"><b>50 ₽</b></div>
            <div class="card__tokens">50 000 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="tok-100k" data-name="100 000 токенов" data-price="100" data-old="100" data-tokens="100000">
            <div class="card__top"><span class="card__tag">Токены</span><span class="card__save">курс 1:1 ₽</span></div>
            <h3 class="card__name">100 000 <span class="muted">токенов</span></h3>
            <p class="card__desc">20 кейсов или ранг «Элита».</p>
            <div class="card__price"><b>100 ₽</b></div>
            <div class="card__tokens">100 000 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

        </div>
        <p class="staff-note">
          Токены — внутренняя валюта проекта. Курс фиксированный: <b>1 000 токенов = 1 ₽</b>,
          обратный обмен токенов на рубли не предусмотрен.
        </p>
      </div>

      <div class="panel" data-panel="misc">
        <div class="cards">

          <article class="card" data-id="unban" data-name="Разбан" data-price="12.45" data-old="249" data-tokens="12450">
            <div class="card__top"><span class="card__tag">Услуга</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Разбан</h3>
            <p class="card__desc">Снятие блокировки аккаунта на анархии.</p>
            <div class="card__price"><b>12,45 ₽</b><s>249 ₽</s></div>
            <div class="card__tokens">12 450 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="unmute" data-name="Снятие мута" data-price="2.50" data-old="50" data-tokens="2500">
            <div class="card__top"><span class="card__tag">Услуга</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Снятие мута</h3>
            <p class="card__desc">Возвращает голос в чат.</p>
            <div class="card__price"><b>2,50 ₽</b><s>50 ₽</s></div>
            <div class="card__tokens">2 500 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="nick" data-name="Смена ника" data-price="2.50" data-old="50" data-tokens="2500">
            <div class="card__top"><span class="card__tag">Услуга</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Смена ника</h3>
            <p class="card__desc">Без потери прогресса и привилегий.</p>
            <div class="card__price"><b>2,50 ₽</b><s>50 ₽</s></div>
            <div class="card__tokens">2 500 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

          <article class="card" data-id="prefix" data-name="Кастомный префикс" data-price="5.00" data-old="100" data-tokens="5000">
            <div class="card__top"><span class="card__tag">Косметика</span><span class="card__save">−95%</span></div>
            <h3 class="card__name">Префикс</h3>
            <p class="card__desc">До 12 символов, любой цвет и градиент.</p>
            <div class="card__price"><b>5,00 ₽</b><s>100 ₽</s></div>
            <div class="card__tokens">5 000 токенов</div>
            <button class="btn btn--primary btn--block" data-add>В корзину</button>
          </article>

        </div>
      </div>

      <p class="shop-note">
        Оплата: <a href="https://donatex.gg/donate/zwezdak22" target="_blank" rel="noopener">DonateX</a> —
        СБП, карты РФ и зарубежные, ЮMoney. После оплаты укажи ник в комментарии, выдача автоматическая.
      </p>
    </div>
  </section>

  <!-- MODES -->
  <section class="section section--tight" id="modes">
    <div class="container">
      <div class="section__head reveal">
        <span class="kicker">Режимы</span>
        <h2 class="section__title">Скопировано <span class="grad">до блока</span></h2>
        <p class="section__lead">Тот же набор режимов, что и на оригинале. Сборка сервера — FunTime v1.0 ULTRA, плагины FakeFT*.</p>
      </div>

      <div class="modes">
        <article class="mode mode--big reveal">
          <div class="mode__head">
            <span class="mode__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 13 6.5 20.5a2.1 2.1 0 0 1-3-3L11 10"/><path d="m16 16 5-5"/><path d="m8 8 5-5"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg></span>
            <div>
              <h3>Анархия 101</h3>
              <p>Гриферство разрешено, приват есть. Трапы, кланы, аукцион, рейд-базы.</p>
            </div>
          </div>
          <div class="mode__tags"><span>1.21.4–1.26.3</span><span>приват</span><span>кланы</span><span>аукцион</span></div>
        </article>


        <article class="mode reveal">
          <div class="mode__head">
            <span class="mode__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/><path d="M14.5 6.5 18 3h3v3l-3.5 3.5"/><path d="m5 14 4 4"/><path d="m7 17-3 3"/><path d="m3 19 2 2"/></svg></span>
            <div>
              <h3>Дуэли</h3>
              <p>1x1 и 2x2 на аренах, рейтинг и сезонные награды.</p>
            </div>
          </div>
          <div class="mode__tags"><span>рейтинг</span><span>арены</span></div>
        </article>

        <article class="mode reveal">
          <div class="mode__head">
            <span class="mode__ico" aria-hidden="true"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/></svg></span>
            <div>
              <h3>Казино</h3>
              <p>Рулетка, кейсы, колесо фортуны. Ставки только на игровую валюту.</p>
            </div>
          </div>
          <div class="mode__tags"><span>FunCasino</span><span>кейсы</span></div>
        </article>
      </div>

      <div class="steps reveal">
        <div class="step">
          <b>01</b>
          <h4>Скачай лаунчер</h4>
          <p>Или зайди с обычного Minecraft 1.21.4–1.26.3 — поддержка Java.</p>
        </div>
        <div class="step">
          <b>02</b>
          <h4>Введи IP</h4>
          <p><code>chords-ivory.tun.ply.gg</code> — и сервер сам предложит ресурспак.</p>
        </div>
        <div class="step">
          <b>03</b>
          <h4>Выбери ранг</h4>
          <p>Цены уже поделены на пять. Ничего считать не нужно.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY -->
  <section class="section" id="why">
    <div class="container">
      <div class="why">
        <div class="why__left reveal">
          <span class="kicker">Математика</span>
          <h2 class="section__title">Почему <span class="grad grad--lime">÷20</span></h2>
          <p class="section__lead">
            Мы берём официальный прайс FunTime и делим каждую позицию на пять.
            Никаких «скидок от завышенной цены» — сравнение открытое.
          </p>

          <div class="ratio">
            <div class="ratio__bar">
              <span class="ratio__label">FunTime</span>
              <div class="ratio__track"><div class="ratio__fill ratio__fill--full" data-w="100"></div></div>
              <b>100%</b>
            </div>
            <div class="ratio__bar">
              <span class="ratio__label">FunTime COPY</span>
              <div class="ratio__track"><div class="ratio__fill ratio__fill--lime" data-w="5"></div></div>
              <b>5%</b>
            </div>
          </div>

          <ul class="ticks">
            <li>Без платы за бренд и «официальность»</li>
            <li>Хостинг в РФ, свои железки, без наценки посредников</li>
            <li>Тот же лут-пул кейсов и те же киты</li>
            <li>Возврат в течение 24 часов, если не зашло</li>
          </ul>

          <a href="#shop" class="btn btn--primary">Проверить цены</a>
        </div>

        <div class="why__table reveal">
          <div class="ptable">
            <div class="ptable__row ptable__row--head">
              <span>Позиция</span>
              <span>FunTime</span>
              <span>У нас</span>
            </div>
            <div class="ptable__row"><span>Барон</span><s>49 ₽</s><b>2,45 ₽</b></div>
            <div class="ptable__row"><span>Страж</span><s>89 ₽</s><b>4,45 ₽</b></div>
            <div class="ptable__row"><span>Герой</span><s>139 ₽</s><b>6,95 ₽</b></div>
            <div class="ptable__row"><span>Аспид</span><s>179 ₽</s><b>8,95 ₽</b></div>
            <div class="ptable__row"><span>Сквид</span><s>279 ₽</s><b>13,95 ₽</b></div>
            <div class="ptable__row"><span>Глава</span><s>379 ₽</s><b>18,95 ₽</b></div>
            <div class="ptable__row"><span>Элита</span><s>579 ₽</s><b>28,95 ₽</b></div>
            <div class="ptable__row"><span>Титан</span><s>779 ₽</s><b>38,95 ₽</b></div>
            <div class="ptable__row"><span>Принц</span><s>979 ₽</s><b>48,95 ₽</b></div>
            <div class="ptable__row"><span>Князь</span><s>1 299 ₽</s><b>64,95 ₽</b></div>
            <div class="ptable__row ptable__row--hl"><span>Герцог</span><s>2 799 ₽</s><b>139,95 ₽</b></div>
            <div class="ptable__row"><span>Разбан</span><s>249 ₽</s><b>12,45 ₽</b></div>
          </div>
          <p class="ptable__note">* Цены оригинала приведены ориентировочно, для наглядного сравнения. Итог: −95% по каждой позиции (÷20).</p>
        </div>
      </div>
    </div>
  </section>

  <!-- REVIEWS -->
  <section class="section section--tight" id="reviews">
    <div class="container">
      <div class="section__head reveal">
        <span class="kicker">Отзывы</span>
        <h2 class="section__title">Что пишут <span class="grad">игроки</span></h2>
      </div>
      <div class="reviews">
        <figure class="review reveal">
          <div class="review__stars">★★★★★</div>
          <blockquote>Взял Герцога за 140 вместо 2 800. Думал развод — выдали за минуту, префикс уже стоит.</blockquote>
          <figcaption><span class="ava" aria-hidden="true">K</span> Kirill_Anarchy</figcaption>
        </figure>
        <figure class="review reveal">
          <div class="review__stars">★★★★★</div>
          <blockquote>Кейсы реально те же. Открыл 10 штук за цену одного оригинального.</blockquote>
          <figcaption><span class="ava ava--2" aria-hidden="true">M</span> morkovv</figcaption>
        </figure>
        <figure class="review reveal">
          <div class="review__stars">★★★★☆</div>
          <blockquote>Онлайн поменьше, чем на ФТ, но лаги отсутствуют, а прайс ÷20 решает.</blockquote>
          <figcaption><span class="ava ava--3" aria-hidden="true">S</span> SEND_KILL</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section" id="faq">
    <div class="container container--narrow">
      <div class="section__head reveal">
        <span class="kicker">FAQ</span>
        <h2 class="section__title">Частые <span class="grad">вопросы</span></h2>
      </div>

      <div class="faq reveal">
        <details class="faq__item" open>
          <summary>Это официальный FunTime?</summary>
          <p>Нет. Это неофициальная копия-фан-проект под названием FunTime COPY. Мы не связаны с администрацией оригинала, не используем их бренд как свой и не выдаём себя за них.</p>
        </details>
        <details class="faq__item">
          <summary>Почему цены в 20 раз ниже?</summary>
          <p>Потому что мы не платим за лицензию бренда, маркетинг и посредников. Каждая позиция прайса FunTime поделена ровно на 20 — это видно в таблице сравнения. Цены оригинала ориентировочные, проект демонстрационный.</p>
        </details>
        <details class="faq__item">
          <summary>Как быстро придёт покупка?</summary>
          <p>Автоматически, обычно до 30 секунд после подтверждения оплаты. Если игрок офлайн — товар выдастся при входе.</p>
        </details>
        <details class="faq__item">
          <summary>Можно вернуть деньги?</summary>
          <p>Да, если товар не был использован — в течение 24 часов через поддержку на сайте.</p>
        </details>
        <details class="faq__item">
          <summary>Какая версия Minecraft?</summary>
          <p>Java Edition 1.21.4–1.26.3. Подключение через ViaVersion — зайти можно с любого клиента этого диапазона.</p>
        </details>
        <details class="faq__item">
          <summary>Данные карты в безопасности?</summary>
          <p>Оплата проходит на стороне платёжного провайдера, мы не храним номера карт.</p>
        </details>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section" id="support">
    <div class="container">
      <div class="cta reveal">
        <div class="cta__glow" aria-hidden="true"></div>
        <div class="cta__inner">
          <h2>Заходи на сервер</h2>
          <p>IP <code>chords-ivory.tun.ply.gg</code> — скопируй одной кнопкой. Привилегии и кейсы уже в магазине.</p>
          <div class="cta__actions">
            <button class="btn btn--primary btn--lg" id="copyIp2" data-ip="chords-ivory.tun.ply.gg">Скопировать IP</button>
            <a href="#shop" class="btn btn--ghost btn--lg">В магазин</a>
          </div>
          <div class="cta__links">
            <a href="https://zxc458675.github.io/kochtime.github.io/" target="_blank" rel="noopener">Сайт проекта</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  </main>

<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <a class="logo" href="#top">
          <span class="logo__cube" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
          <span class="logo__text">
            <span class="logo__name">FUNTIME<span class="logo__copy">COPY</span></span>
            <span class="logo__sub">KochTime project</span>
          </span>
        </a>
        <p>Неофициальная копия Minecraft-проекта FunTime. Тот же контент — цена в 20 раз ниже.</p>
        <button class="ip-mini" data-ip="chords-ivory.tun.ply.gg">
          <span class="dot"></span> chords-ivory.tun.ply.gg
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
        </button>
      </div>

      <nav class="footer__col" aria-label="Магазин">
        <h4>Магазин</h4>
        <a href="#shop">Привилегии</a>
        <a href="#shop">Кейсы</a>
        <a href="#shop">Валюта</a>
        <a href="#shop">Услуги</a>
      </nav>

      <nav class="footer__col" aria-label="Проект">
        <h4>Проект</h4>
        <a href="#modes">Режимы</a>
        <a href="#why">Почему дешевле</a>
        <a href="#reviews">Отзывы</a>
        <a href="#faq">FAQ</a>
        <a href="https://zxc458675.github.io/kochtime.github.io/" target="_blank" rel="noopener">Официальный сайт</a>
      </nav>

      <nav class="footer__col" aria-label="Документы">
        <h4>Документы</h4>
        <a href="#faq">Возврат</a>
        <a href="#faq">Условия</a>
      </nav>
    </div>

    <div class="footer__bottom">
      <p>© 2026 KochTime. FunTime COPY — фан-проект, не связан с funtime.su и его администрацией.</p>
      <p class="footer__disclaimer">Демо-проект: товары, цены и оплата вымышлены. Все товары — цифровые. 18+ для раздела «Казино».</p>
    </div>
  </div>
</footer>

<!-- CART -->
<div class="drawer" id="cart" aria-hidden="true">
  <div class="drawer__overlay" data-close-cart></div>
  <aside class="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="cartTitle">
    <header class="drawer__head">
      <h3 id="cartTitle">Корзина <span class="cart-count" data-count>0</span></h3>
      <button class="icon-btn" data-close-cart aria-label="Закрыть корзину">✕</button>
    </header>

    <div class="drawer__body">
      <div class="cart-empty" id="cartEmpty">
        <span class="cart-empty__ico" aria-hidden="true">🛒</span>
        <p>Пока пусто. Добавь ранг или кейс — цены уже ÷20.</p>
        <button class="btn btn--ghost btn--sm" data-close-cart>В магазин</button>
      </div>
      <div class="cart-items" id="cartItems"></div>
    </div>

    <form class="drawer__foot" id="checkoutForm" novalidate>
      <div class="cart-total">
        <span>Итого</span>
        <div><s id="cartOld">0 ₽</s><b id="cartTotal">0 ₽</b></div>
      </div>
      <label class="field">
        <span>Ник в Minecraft</span>
        <input type="text" name="nick" placeholder="Steve" required minlength="3" maxlength="16" autocomplete="off">
      </label>
      <div class="pay-row" role="radiogroup" aria-label="Способ оплаты">
        <label class="pay"><input type="radio" name="pay" value="СБП" checked><span>СБП</span></label>
        <label class="pay"><input type="radio" name="pay" value="Карта"><span>Карта</span></label>
        <label class="pay"><input type="radio" name="pay" value="Крипта"><span>Крипта</span></label>
      </div>
      <button class="btn btn--primary btn--block btn--lg" type="submit" id="payBtn" disabled>Оплатить</button>
      <p class="drawer__note">Оплата на DonateX. Курс: 1 000 токенов = 1 ₽.</p>
    </form>
  </aside>
</div>

<!-- SUCCESS -->
<div class="modal" id="success" aria-hidden="true">
  <div class="modal__overlay" data-close-modal></div>
  <div class="modal__box" role="dialog" aria-modal="true" aria-labelledby="successTitle">
    <div class="modal__check" aria-hidden="true">₽</div>
    <h3 id="successTitle">Оплата на DonateX</h3>
    <p id="successText">Ссылка на оплату откроется в новой вкладке. В комментарии укажи ник — выдача автоматическая.</p>
    <a class="btn btn--primary btn--block" href="https://donatex.gg/donate/zwezdak22" target="_blank" rel="noopener">Открыть DonateX</a>
    <button class="modal__close" data-close-modal>Закрыть</button>
  </div>
</div>

<div class="toast" id="toast" role="status" aria-live="polite"></div>

<script src="assets/app.js"></script>
</body>
</html>
