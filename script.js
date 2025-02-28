const symbols = { 
    "koza": "images/symb_mid_1.png",
    "k": "images/symbol_low_k.png",
    "chiken": "images/symb_mid_2.png",
    "a": "images/symbol_low_a.png",
    "lis": "images/symb_high.png",
    "hryh": "images/symb_mid_3.png",
    "ovza": "images/symb_mid_4.png",
    "bonus": "images/symb_bonusgame.png",
    "q": "images/symbol_low_q.png" 
};

const reels = document.querySelectorAll(".reel img");
let button = document.getElementById("button");
let bet = 10;
let coins = 100;
let plus50 = document.querySelector('#plus')
let minus5 = document.querySelector('#minus')

document.getElementById("bet").innerHTML = bet;
document.getElementById("coins").innerHTML = coins;

function spin() {
    if (coins < bet) {
        alert("Недостатньо монет!");
        return;
    }

    button.disabled = true;
    coins -= bet;
    document.getElementById("coins").innerHTML = coins;

    let maxDelay = 0; 

    reels.forEach((reel, index) => {
        let delay = index * 200;
        maxDelay = Math.max(maxDelay, 2000 + delay);

        let interval = setInterval(() => {
            let keys = Object.keys(symbols);
            let randomSymbol = keys[Math.floor(Math.random() * keys.length)];
            reel.src = symbols[randomSymbol];
            reel.id = randomSymbol;
        }, 100);

        setTimeout(() => clearInterval(interval), 2000 + delay);
    });

    setTimeout(() => {
        button.disabled = false;
    }, maxDelay + 100);
}

function plus() {
    bet +=5;
    document.getElementById('bet').innerHTML = bet;
    minus5.disabled = false; 
    if (bet >= 50){
        plus50.disabled = true; 
    }
    else{
        plus50.disabled = false; 
    }
}

function minus() {
    bet -=5;
    document.getElementById('bet').innerHTML = bet;
    plus50.disabled = false; 
    if (bet <= 5){
        minus5.disabled = true;
    }
    else{
        minus5.disabled = false; 
    }
}