//JS
let vars = [
    money = 1000000,
    visitorsAnnual = 200, 
    ticketCost = 0,
    year = 2024
]

function moneyUpdate(){
    document.getElementById('money').innerHTML = `Money: $${money}`;
    document.getElementById('annual').innerHTML = `Annual Visitors: ${visitorsAnnual}`;
    document.getElementById('clock').innerHTML = year;
};

function buyArtifact(cost, give){
    if (money >= cost) {
        money -= cost
        visitorsAnnual += give;
        moneyUpdate()
    } else {
        alert(`Whomp whomp you can\'t afford that :( You need $${cost - money}`);
    };
};

function applyTC(){
    ticketCost = document.getElementById('ticketCost').value;
    console.log(ticketCost)
};

function cleanseVisitors(){
    if (visitorsAnnual < 0){
        visitorsAnnual = 0;
        Math.ceil(visitorsAnnual)
    };
};

function filterAnnual(){
    if (ticketCost >= (visitorsAnnual / 50)){
        visitorsAnnual -= (visitorsAnnual / 50)
        cleanseVisitors()
        moneyUpdate()
    }
};

function theft(){
    let stolen = Math.floor(Math.random() * money) + 0;
    money -= stolen;
    alert(`There has been a theft, you lost $${stolen}!`);
}

function checkTheft(){
    let chance = Math.floor(Math.random() * 20) + 1;
    if (chance = 1){
        theft()
    }
}

setInterval(function addYear(){
    year += 1;
    filterAnnual()
    let profit = visitorsAnnual * ticketCost;
    money += profit;
    checkTheft()
    alert(`You made $${profit}, it is now ${year}`);
    moneyUpdate()
}, 60000);

function save(){
    localStorage.setItem('MTD', JSON.stringify(vars))
}

function load(){
    try {
        vars = localStorage.getItem('MTD')
    } catch {
        alert('No save data present');
    }
}
