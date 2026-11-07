<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FunTime | Магазин привилегий</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
        body { font-family: 'Montserrat', sans-serif; background: radial-gradient(circle at top, #2a1b3d, #0a0a0a 70%); color: #fff; margin: 0; padding: 40px 20px; display: flex; justify-content: center; min-height: 100vh; }
        .container { max-width: 1200px; width: 100%; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(15px); padding: 50px; border-radius: 30px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px rgba(0,0,0,0.8); }
        h1 { text-align: center; font-size: 3.5em; margin-bottom: 10px; background: linear-gradient(45deg, #ff6b6b, #feca57, #ff9ff3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .subtitle { text-align: center; color: #bbb; margin-bottom: 50px; font-size: 1.2em; }
        .kits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; margin-bottom: 50px; }
        .kit-card { background: linear-gradient(145deg, rgba(30,30,30,0.8), rgba(10,10,10,0.9)); border: 1px solid rgba(255, 255, 255, 0.05); padding: 25px 20px; border-radius: 20px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; }
        .kit-card img { width: 100%; height: 130px; object-fit: cover; border-radius: 12px; background: #111; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); }
        .kit-title { font-size: 1.4em; font-weight: 900; text-transform: uppercase; margin: 10px 0; }
        .title-hero { color: #3498db; } .title-baron { color: #95a5a6; } .title-titan { color: #e74c3c; } .title-prince { color: #f1c40f; } .title-knyaz { color: #9b59b6; }
        .price { color: #2ecc71; font-weight: 900; font-size: 1.4em; margin-bottom: 20px; }
        .btn-buy { display: inline-block; width: 100%; padding: 12px 0; background: linear-gradient(90deg, #f39c12, #f1c40f); color: #000; text-decoration: none; font-weight: 900; border-radius: 10px; text-transform: uppercase; box-sizing: border-box; }
        .calculator { background: linear-gradient(145deg, rgba(20,20,20,0.9), rgba(5,5,5,0.9)); padding: 40px; border-radius: 20px; margin: 0 auto 50px auto; text-align: center; border: 1px solid rgba(241, 196, 15, 0.3); }
        .calculator h2 { color: #f1c40f; font-size: 2em; margin-top: 0; }
        .calculator input { padding: 18px; font-size: 20px; width: 80%; max-width: 350px; border-radius: 12px; border: 2px solid #333; background: #111; color: #fff; text-align: center; }
        .calc-result { font-size: 28px; color: #f1c40f; margin-top: 25px; font-weight: 900; }
        .donate-total { text-align: center; margin-top: 40px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); }
        .btn-total { display: inline-block; background: linear-gradient(90deg, #e74c3c, #c0392b); color: white; padding: 20px 80px; text-decoration: none; font-size: 24px; font-weight: 900; border-radius: 50px; text-transform: uppercase; }
        .note { margin-top: 25px; font-size: 14px; color: #777; }
    </style>
</head>
<body>
<div class="container">
    <h1>Магазин FunTime</h1>
    <p class="subtitle">Поддержи сервер и получи крутые плюшки!</p>

    <div class="kits-grid">
        <div class="kit-card">
            <img src="hero.png" alt="Hero">
            <div class="kit-title title-hero">Герой</div>
            <div class="price">14 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>
        <div class="kit-card">
            <img src="baron.png" alt="Baron">
            <div class="kit-title title-baron">Барон</div>
            <div class="price">25 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>
        <div class="kit-card">
            <img src="titan.png" alt="Titan">
            <div class="kit-title title-titan">Титан</div>
            <div class="price">50 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>
        <div class="kit-card">
            <img src="prince.png" alt="Prince">
            <div class="kit-title title-prince">Принц</div>
            <div class="price">95 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>
        <div class="kit-card">
            <img src="knyaz.png" alt="Knyaz">
            <div class="kit-title title-knyaz">Князь</div>
            <div class="price">150 ₽</div>
            <a href="https://donatex.gg/donate/zwezdak22" class="btn-buy">Купить</a>
        </div>
    </div>

    <div class="calculator">
        <h2>💎 Калькулятор коинов</h2>
        <p style="color: #aaa; margin-bottom: 20px;">Введи сумму в рублях, чтобы узнать, сколько получишь коинов:</p>
        <input type="number" id="rubInput" placeholder="Например: 500" oninput="calculateCoins()">
        <div class="calc-result" id="result">Ты получишь: 0 коинов</div>
        <p class="note">Курс: 1000 коинов = 100 рублей</p>
    </div>

    <div class="donate-total">
        <h2>Просто хочешь поддержать проект?</h2>
        <a href="https://donatex.gg/donate/zwezdak22" class="btn-total">Поддержать</a>
        <p class="note">После оплаты привилегия или коины будут выданы автоматически.</p>
    </div>
</div>

<script>
    function calculateCoins() {
        var rub = document.getElementById('rubInput').value;
        var coins = rub * 10;
        document.getElementById('result').innerText = 'Ты получишь: ' + coins + ' коинов';
    }
</script>
</body>
</html>
</script>

</body>
</html>
