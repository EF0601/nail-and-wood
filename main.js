let stats = {
  tables: 0,
  nails: 10,
  wood: 10,
  money: 50,
  sellChance: 40,
};

let statsDis = {
  tablesDis: document.querySelector('.tableDis'),
  nailsDis: document.querySelector('.nailsDis'),
  woodDis: document.querySelector('.woodDis'),
  moneyDis: document.querySelector('.moneyDis'),
};

function updateDis() {
  statsDis.tablesDis.textContent = stats.tables;
  statsDis.nailsDis.textContent = stats.nails;
  statsDis.woodDis.textContent = stats.wood;
  statsDis.moneyDis.textContent = stats.money;
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
    stats.money = stats.money + (2 * stats.tables);
    stats.tables = 0;
  }
  updateDis();
  stats.money--;
}

//on startup
randomizeTable();
