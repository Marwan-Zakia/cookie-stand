'use strict';
let parentElement = document.getElementById("cockielocation");

// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let parentElement = document.getElementById('cockielocation');
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   agvCookie: 6.3,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {

//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;

//     }


//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     parentElement.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     parentElement.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   agvCookie: 1.2,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {


//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;

//     }


//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     parentElement.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     parentElement.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }
// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   agvCookie: 3.7,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {

//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;

//     }


//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     parentElement.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     parentElement.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }
// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   agvCookie: 2.3,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {


//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;

//     }

//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     parentElement.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     parentElement.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }
// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   agvCookie: 4.6,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;

//     }


//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     parentElement.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     parentElement.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }

// seattle.getCustomer();
// seattle.render();


// tokyo.getCustomer();
// tokyo.render();

// Dubai.getCustomer();
// Dubai.render();

// Paris.getCustomer();
// Paris.render();

// Lima.getCustomer();
// Lima.render();

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let standArry = [];
function Cookiestand(name, minCust, maxCust, agvCookie, cookiesPerHour, randomCustperhour, total) {

  this.name = name;

  this.minCust = minCust;

  this.maxCust = maxCust;

  this.agvCookie = agvCookie;

  this.cookiesPerHour = cookiesPerHour;

  this.randomCustperhour = randomCustperhour;

  this.total = total;
}

let Seattle = new Cookiestand('Seattle', 23, 65, 6.3, [], [], 0);
standArry.push(Seattle);

let Tokyo = new Cookiestand('Tokyo', 3, 24, 1.2, [], [], 0);
standArry.push(Tokyo);

let Dubai = new Cookiestand('Dubai', 11, 38, 3.7, [], [], 0);
standArry.push(Dubai);

let Paris = new Cookiestand('Paris', 20, 38, 2.3, [], [], 0);
standArry.push(Paris);

let Lima = new Cookiestand('Lima', 2, 16, 4.6, [], [], 0);
standArry.push(Lima);


Cookiestand.prototype.calculaterandomCustperhour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.randomCustperhour.push(randomNumberGenerator(this.minCust, this.maxCust));
  }
};
Cookiestand.prototype.getRandomCustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlySales = Math.ceil(this.randomCustperhour[i] * this.agvCookie);
    this.cookiesPerHour.push(hourlySales);
    this.total += hourlySales;
  }
};
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let totalSalesDailysum = 0;
let eachHour = 0;
let totalSalesprehour = [];
Cookiestand.getRandomhour = function () {
  for (let i = 0; i < 15; i++) {
    eachHour = Seattle.cookiesPerHour[i] + Tokyo.cookiesPerHour[i] + Dubai.cookiesPerHour[i] + Paris.cookiesPerHour[i] + Lima.cookiesPerHour[i];
    totalSalesprehour.push(eachHour);
  }
  totalSalesDailysum = Seattle.total + Tokyo.total + Dubai.total + Paris.total + Lima.total;
  totalSalesprehour.push(totalSalesDailysum);
};
function render() {
  let genTr = document.createElement('tr');
  let thCity = document.createElement('th');
  thCity.textContent = 'city';
  genTr.appendChild(thCity);
  for (let i = 0; i < hours.length; i++) {
    let thhours = document.createElement('th');
    thhours.textContent = hours[i];
    genTr.appendChild(thhours);
  }
  let totalEachLocation = document.createElement('th');
  totalEachLocation.textContent = 'total';
  genTr.appendChild(totalEachLocation);
  parentElement.appendChild(genTr);
}
function cookies() {
  for (let i = 0; i < 5; i++) {
    let genTr = document.createElement('tr');
    let thCity = document.createElement('th');
    thCity.textContent = standArry[i].name;
    genTr.appendChild(thCity);
    for (let j = 0; j < hours.length; j++) {
      let tdata = document.createElement('td');
      tdata.textContent = standArry[i].cookiesPerHour[j];
      genTr.appendChild(tdata);
    }
    let totalCookies = document.createElement('td');
    totalCookies.textContent = standArry[i].total;
    genTr.appendChild(totalCookies);
    parentElement.appendChild(genTr);
  }
  let trTotal = document.createElement('tr');
  let thTotal = document.createElement('th');
  thTotal.textContent = 'total each hour';
  trTotal.appendChild(thTotal);
  parentElement.appendChild(trTotal);
  for (let k = 0; k < hours.length + 1; k++) {
    let tdTotalAcross = document.createElement('td');
    tdTotalAcross.textContent = totalSalesprehour[k];
    trTotal.appendChild(tdTotalAcross);
  }
}

for (let i = 0; i < 5; i++) {
  standArry[i].calculaterandomCustperhour();
  standArry[i].getRandomCustomer();
}
Cookiestand.getRandomhour();
render();
cookies();