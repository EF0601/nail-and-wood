let stats = {
  tables: 0,
  nails: 10,
  wood: 10,
  money: 50,
  sellChance: 40,
  tableValue: 2,
};

let statsDis = {
  tablesDis: document.querySelector('.tableDis'),
  nailsDis: document.querySelector('.nailsDis'),
  woodDis: document.querySelector('.woodDis'),
  moneyDis: document.querySelector('.moneyDis'),
  sellChanceDis: document.querySelector('.saleChanceDis'),
  tableValueDis: document.querySelector('.tableValueDis'),
};

let upgradeValues = {
  adsPrice: 30,
  qualityPrice: 80,
};

let upgradeLevels = {
  adsLevel: 1,
  qualityLevel: 1,
};

function updateDis() {
  statsDis.tablesDis.textContent = stats.tables;
  statsDis.nailsDis.textContent = stats.nails;
  statsDis.woodDis.textContent = stats.wood;
  statsDis.moneyDis.textContent = stats.money;
  statsDis.sellChanceDis.textContent = stats.sellChance;
  statsDis.tableValueDis.textContent = stats.tableValue;

  document.querySelector('.adPrice').textContent = upgradeValues.adsPrice;
  document.querySelector('.qualityPrice').textContent = upgradeValues.qualityPrice;
}

//workbench randomizing
function buildTable() {
  if (document.querySelector('.tableInput').value.toUpperCase() == randomTable) {
    if(stats.nails >= 4 && stats.wood >= 2){
      stats.tables++;
      stats.nails = stats.nails - 4;
      stats.wood = stats.wood - 2;
      randomizeTable();
      console.log('User successfully built a table.');
      document.querySelector('.tableInput').value = "";
    }
    console.log('User inputted correct sequence, but did not have materials.');
  }
  updateDis();
}

//workbench randomize function
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let randomTable = "";
function randomizeTable() {
  let currentRandom = [];
  for (let i = 0; i < 5; i++) {
    currentRandom.push(alphabet[Math.floor(Math.random() * 26)]);
  }
  randomTable = currentRandom.join("");
  document.querySelector('.letters').textContent = randomTable;
  console.log(randomTable);
}

//purchasing
function buyNails(amount) {
  switch (amount) {
    case 5:
      if (stats.money >= 1) {
        stats.nails = stats.nails + 5;
        stats.money--;
      }
      break;
    case 10:
      if (stats.money >= 2) {
        stats.nails = stats.nails + 10;
        stats.money = stats.money - 2;
      }
      break;
    default:
      break;
  }
  updateDis();
}

function buyWood(amount) {
  switch (amount) {
    case 5:
      if (stats.money >= 3) {
        stats.wood = stats.wood + 5;
        stats.money = stats.money - 3;
      }
      break;
    case 10:
      if (stats.money >= 6) {
        stats.wood = stats.wood + 10;
        stats.money = stats.money - 6;
      }
      break;
    default:
      break;
  }
  updateDis();
}

//sell
function sell() {
  if((Math.floor(Math.floor(Math.random() * 100) + 1) <= stats.sellChance)){
    stats.money = stats.money + (stats.tableValue * stats.tables);
    stats.tables = 0;
  }
  updateDis();
  stats.money--;
}

//upgrades
function upgradeItem(thing){
  switch (thing) {
    case "ads":
      if (upgradeLevels.adsLevel <= 5) {
        //This increases sale chance
        stats.money = stats.money - upgradeValues.adsPrice;
        stats.sellChance = Math.round(stats.sellChance * 1.08);
        upgradeValues.adsPrice = Math.round(upgradeValues.adsPrice * 1.05);
        upgradeLevels.adsLevel++;
        updateDis();
      }
      break;
    case "quality":
      if (upgradeLevels.qualityLevel <= 5) {
        //This increases price of each table
        stats.money = stats.money - upgradeValues.qualityPrice;
        stats.tableValue = Math.round(stats.tableValue * 1.4);
        stats.sellChance = Math.round(stats.sellChance * 1.03);
        upgradeValues.qualityPrice = Math.round(upgradeValues.qualityPrice * 1.08);
        upgradeLevels.qualityLevel++;
        updateDis();
      }
      break;
    default:
      break;
  }
}

//hacks
function hacks(wayToHack) {
  switch (wayToHack) {
    case "money":
      stats.money = 10000000000000;
      break;
    case "nails":
      stats.nails = 10000000000000;
      break;
    case 'wood':
      stats.wood = 10000000000000;
      break;

    default:
      console.log("The usage of the function is as: hacks([money/nails/wood])");
      break;
  }
  updateDis();
}

//on startup
randomizeTable();
