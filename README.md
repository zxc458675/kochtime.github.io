<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Донат Шоп | Копии FunTime</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
        body { font-family: 'Montserrat', sans-serif; background: radial-gradient(circle at top, #2a1b3d, #0a0a0a 70%); color: #fff; margin: 0; padding: 40px 20px; display: flex; justify-content: center; min-height: 100vh; }
        .container { max-width: 1200px; width: 100%; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(15px); padding: 50px; border-radius: 30px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px rgba(0,0,0,0.8); }
        
        h1 { text-align: center; font-size: 3.2em; margin-bottom: 10px; background: linear-gradient(45deg, #ff6b6b, #feca57, #ff9ff3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: 2px; }
        .subtitle { text-align: center; color: #bbb; margin-bottom: 50px; font-size: 1.2em; }
        
        .kits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px; margin-bottom: 50px; }
        .kit-card { background: linear-gradient(145deg, rgba(30,30,30,0.8), rgba(10,10,10,0.9)); border: 1px solid rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 20px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; transition: 0.3s; }
        .kit-card:hover { transform: translateY(-10px); border-color: #f1c40f; box-shadow: 0 10px 20px rgba(241, 196, 15, 0.2); }
        .kit-card img { width: 100%; height: 120px; object-fit: cover; border-radius: 12px; background: #111; margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.1); }
        .kit-title { font-size: 1.3em; font-weight: 900; text-transform: uppercase; margin: 5px 0; }
        
        .kit-desc { font-size: 0.85em; color: #aaa; margin-bottom: 15px; line-height: 1.4; text-align: left; min-height: 80px; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; }
        .kit-desc span { color: #f1c40f; font-weight: bold; }

        .title-hero { color: #3498db; } .title-baron { color: #95a5a6; } .title-titan { color: #e74c3c; } .title-prince { color: #f1c40f; } .title-knyaz { color: #9b59b6; }
        
        .price { color: #2ecc71; font-weight: 900; font-size: 1.3em; margin-bottom: 15px; }
        .btn-buy { display: inline-block; width: 100%; padding: 10px 0; background: linear-gradient(90deg, #f39c12, #f1c40f); color: #000; text-decoration: none; font-weight: 900; border-radius: 10px; text-transform: uppercase; box-sizing: border-box; transition: 0.3s; }
        .btn-buy:hover { background: linear-gradient(90deg, #f1c40f, #f39c12); transform: scale(1.03); }

        .calculator { background: linear-gradient(145deg, rgba(20,20,20,0.9), rgba(5,5,5,0.9)); padding: 40px; border-radius: 20px; margin: 0 auto 30px auto; text-align: center; border: 1px solid rgba(241, 196, 15, 0.3); max-width: 500px; }
        .calculator h2 { color: #f1c40f; font-size: 1.8em; margin-top: 0; }
        
        .calc-controls input { padding: 15px; font-size: 18px; width: 80%; max-width: 300px; border-radius: 10px; border: 2px solid #333; background: #111; color: #fff; text-align: center; outline: none; }
        .calc-controls input:focus { border-color: #f1c40f; }
        
        .calc-result { font-size: 20px; color: #fff; font-weight: 900; margin-top: 25px; line-height: 1.5; }
        .calc-result span { color: #f1c40f; font-size: 26px; }
        .calc-result .green { color: #2ecc71; font-size: 26px; }

        .donate-total { text-align: center; margin-top: 20px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); }
        .btn-total { display: inline-block; background: linear-gradient(90deg, #e74c3c, #c0392b); color: white; padding: 20px 80px; text-decoration: none; font-size: 24px; font-weight: 900; border-radius: 50px; text-transform: uppercase; transition: 0.3s; }
        .btn-total:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(231, 76, 60, 0.6); }
        
        .bonus-text { margin-top: 30px; font-size: 16px; font-weight: bold; color: #d8b4fe; text-shadow: 0 0 10px rgba(168, 85, 247, 0.5); letter-spacing: 0.5px; }
    </style>
</head>
<body>
<div class="container">
    <h1>Донат Шоп копии FunTime</h1>
    <p class="subtitle">Поддержи проект и получи крутые плюшки!</p>

    <div class="kits-grid">
        <div class="kit-card">
            <img src="hero.png" alt="Hero">
            <div class="kit-title title-hero">Герой</div>
            <div class="kit-desc">
                <span>Что дает:</span><br>
                • Доступ к /kit hero<br>
                • Префикс [Герой] в чате
            </div>
            <div class="price">14 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="baron.png" alt="Baron">
            <div class="kit-title title-baron">Барон</div>
            <div class="kit-desc">
                <span>Что дает:</span><br>
                • Доступ к /kit baron<br>
                • Префикс [Барон]<br>
                • Цветной ник
            </div>
            <div class="price">25 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="titan.png" alt="Titan">
            <div class="kit-title title-titan">Титан</div>
            <div class="kit-desc">
                <span>Что дает:</span><br>
                • Доступ к /kit titan<br>
                • Префикс [Титан]<br>
                • /repair (ремонт вещей)
            </div>
            <div class="price">50 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="prince.png" alt="Prince">
            <div class="kit-title title-prince">Принц</div>
            <div class="kit-desc">
                <span>Что дает:</span><br>
                • Доступ к /kit prince<br>
                • Префикс [Принц]<br>
                • /repair, /enderchest
            </div>
            <div class="price">95 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="knyaz.png" alt="Knyaz">
            <div class="kit-title title-knyaz">Князь</div>
            <div class="kit-desc">
                <span>Что дает:</span><br>
                • Доступ к /kit knyaz<br>
                • Префикс [Князь]<br>
                • /fly, /repair, /ec
            </div>
            <div class="price">150 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>
    </div>

    <div class="calculator">
        <h2>💎 Калькулятор токенов</h2>
        <p style="color: #aaa; margin-bottom: 20px;">Введи сумму в рублях, чтобы узнать, сколько это токенов или монет.</p>
        
        <div class="calc-controls">
            <input type="number" id="amountInput" placeholder="Сумма в ₽" oninput="calculateEconomy()">
        </div>
        
        <div class="calc-result" id="result">
            Введи сумму выше...
        </div>
    </div>

    <div class="donate-total">
        <h2>Просто хочешь поддержать проект?</h2>
        <a href="https://donatex.gg/donate/zwezdak22" class="btn-total">Поддержать</a>
        <p class="bonus-text">* При покупке отпишите админу за бонусом в монеты</p>
    </div>
</div>

<script>
    function calculateEconomy() {
        var rub = parseFloat(document.getElementById('amountInput').value) || 0;
        
        var tokens = rub * 10;
        var coins = tokens * 500;

        var resultText = "";

        if (rub > 0) {
            resultText = "<span>" + tokens.toLocaleString('ru-RU') + "</span> токенов<br>" +
                         "или<br>" +
                         "<span class='green'>" + coins.toLocaleString('ru-RU') + "</span> монет";
        } else {
            resultText = "Введи сумму выше...";
        }

        document.getElementById('result').innerHTML = resultText;
    }
</script>
</body>
</html>
