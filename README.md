<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FunTime | Магазин привилегий</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

        body { 
            font-family: 'Montserrat', sans-serif; 
            background: #0a0a0a;
            background: radial-gradient(circle at top, #2a1b3d, #0a0a0a 70%);
            color: #fff; 
            margin: 0; 
            padding: 40px 20px; 
            display: flex;
            justify-content: center;
            min-height: 100vh;
        }

        .container { 
            max-width: 1200px; 
            width: 100%;
            background: rgba(255, 255, 255, 0.03); 
            backdrop-filter: blur(15px);
            padding: 50px; 
            border-radius: 30px; 
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 25px 50px rgba(0,0,0,0.8); 
            animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h1 { 
            text-align: center; 
            font-size: 3.5em; 
            margin-bottom: 10px;
            background: linear-gradient(45deg, #ff6b6b, #feca57, #ff9ff3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 30px rgba(254, 202, 87, 0.3);
            letter-spacing: 2px;
        }

        .subtitle { text-align: center; color: #bbb; margin-bottom: 50px; font-size: 1.2em; font-weight: 400; }

        /* Сетка привилегий */
        .kits-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 30px; 
            margin-bottom: 50px;
        }

        .kit-card { 
            background: linear-gradient(145deg, rgba(30,30,30,0.8), rgba(10,10,10,0.9)); 
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 25px 20px; 
            border-radius: 20px; 
            text-align: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
        }

        .kit-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 20px;
            padding: 2px;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s;
        }

        .kit-card:hover { 
            transform: translateY(-15px) scale(1.02); 
            box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(254, 202, 87, 0.2);
        }
        
        .kit-card:hover::before {
            opacity: 1;
        }

        .kit-card img { 
            width: 100%; 
            height: 130px; 
            object-fit: cover; 
            border-radius: 12px; 
            background: #111; 
            margin-bottom: 20px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: transform 0.4s;
        }

        .kit-card:hover img {
            transform: scale(1.05);
        }

        .kit-title { font-size: 1.4em; font-weight: 900; text-transform: uppercase; margin: 10px 0; letter-spacing: 1px; }

        /* Цвета для названий рангов с свечением */
        .title-hero { color: #3498db; text-shadow: 0 0 15px rgba(52, 152, 219, 0.6); }
        .title-baron { color: #95a5a6; text-shadow: 0 0 15px rgba(149, 165, 166, 0.6); }
        .title-titan { color: #e74c3c; text-shadow: 0 0 20px rgba(231, 76, 60, 0.8); }
        .title-prince { color: #f1c40f; text-shadow: 0 0 20px rgba(241, 196, 15, 0.8); }
        .title-knyaz { color: #9b59b6; text-shadow: 0 0 20px rgba(155, 89, 182, 0.8); }

        .price { color: #2ecc71; font-weight: 900; font-size: 1.4em; margin-bottom: 20px; text-shadow: 0 0 10px rgba(46, 204, 113, 0.3); }

        .btn-buy {
            display: inline-block;
            width: 100%;
            padding: 12px 0;
            background: linear-gradient(90deg, #f39c12, #f1c40f);
            color: #000;
            text-decoration: none;
            font-weight: 900;
            border-radius: 10px;
            text-transform: uppercase;
            transition: all 0.3s;
            box-sizing: border-box;
            letter-spacing: 1px;
        }
        
        .btn-buy:hover { 
            background: linear-gradient(90deg, #f1c40f, #f39c12); 
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(241, 196, 15, 0.5);
        }

        /* Калькулятор */
        .calculator { 
            background: linear-gradient(145deg, rgba(20,20,20,0.9), rgba(5,5,5,0.9)); 
            padding: 40px; 
            border-radius: 20px; 
            margin: 0 auto 50px auto; 
            text-align: center;
            border: 1px solid rgba(241, 196, 15, 0.3);
            box-shadow: inset 0 0 20px rgba(241, 196, 15, 0.05);
        }

        .calculator h2 { color: #f1c40f; font-size: 2em; margin-top: 0; }

        .calculator input { 
            padding: 18px; 
            font-size: 20px; 
            width: 80%;
            max-width: 350px;
            border-radius: 12px; 
            border: 2px solid #333;
            background: #111;
            color: #fff;
            outline: none;
            text-align: center;
            font-family: inherit;
            transition: border-color 0.3s, box-shadow 0.3s;
        }
        
        .calculator input:focus { 
            border-color: #f1c40f; 
            box-shadow: 0 0 15px rgba(241, 196, 15, 0.3);
        }

        .calc-result { font-size: 28px; color: #f1c40f; margin-top: 25px; font-weight: 900; text-shadow: 0 0 10px rgba(241, 196, 15, 0.4); }

        /* Общий донат */
        .donate-total { text-align: center; margin-top: 40px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); }

        .donate-total h2 { font-size: 2em; margin-bottom: 30px; }

        .btn-total { 
            display: inline-block; 
            background: linear-gradient(90deg, #e74c3c, #c0392b); 
            color: white; 
            padding: 20px 80px; 
            text-decoration: none; 
            font-size: 24px; 
            font-weight: 900; 
            border-radius: 50px; 
            transition: all 0.4s; 
            box-shadow: 0 0 30px rgba(231, 76, 60, 0.4);
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .btn-total:hover { 
            background: linear-gradient(90deg, #c0392b, #e74c3c); 
            transform: translateY(-5px) scale(1.05); 
            box-shadow: 0 0 50px rgba(231, 76, 60, 0.8); 
        }

        .note { margin-top: 25px; font-size: 14px; color: #777; }
    </style>
</head>
<body>

<div class="container">
    <h1>Магазин FunTime</h1>
    <p class="subtitle">Поддержи сервер и получи крутые плюшки!</p>

    <div class="kits-grid">
        <div class="kit-card">
            <img src="https://i.imgur.com/8QO9U4r.png" alt="Hero">
            <div class="kit-title title-hero">Герой</div>
            <div class="price">14 ₽</div>
            <a href="https://donatex.gg/donate/baquew" target="_blank" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="https://i.imgur.com/8QO9U4r.png" alt="Baron">
            <div class="kit-title title-baron">Барон</div>
            <div class="price">25 ₽</div>
            <a href="https://donatex.gg/donate/baquew" target="_blank" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="https://i.imgur.com/8QO9U4r.png" alt="Titan">
            <div class="kit-title title-titan">Титан</div>
            <div class="price">50 ₽</div>
            <a href="https://donatex.gg/donate/baquew" target="_blank" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="https://i.imgur.com/8QO9U4r.png" alt="Prince">
            <div class="kit-title title-prince">Принц</div>
            <div class="price">95 ₽</div>
            <a href="https://donatex.gg/donate/baquew" target="_blank" class="btn-buy">Купить</a>
        </div>

        <div class="kit-card">
            <img src="https://i.imgur.com/8QO9U4r.png" alt="Knyaz">
            <div class="kit-title title-knyaz">Князь</div>
            <div class="price">150 ₽</div>
            <a href="https://donatex.gg/donate/baquew" target="_blank" class="btn-buy">Купить</a>
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
        <a href="https://donatex.gg/donate/baquew" target="_blank" class="btn-total">Задонатить</a>
        <p class="note">После оплаты привилегия или коины будут выданы автоматически.</p>
    </div>
</div>

<script>
    function calculateCoins() {
        const rub = document.getElementById('rubInput').value;
        const coins = rub * 10;
        const formattedCoins = coins.toLocaleString('ru-RU');
        document.getElementById('result').innerText = 'Ты получишь: ' + formattedCoins + ' коинов';
    }
</script>

</body>
</html>
