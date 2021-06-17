'use strict';
// let parentElement = document.getElementById('cockielocation');
//  let salesdata = document.getElementById('salesdata');


  // const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  // let parentElement = document.getElementById('cockielocation');

  // let seattle = {
  //   name: 'Seattle',
  //   minCust: 23,
  //   maxCust: 65,
  //   agvCookie: 6.3,
  //   cookiesPerHour: [],
  //   total: 0,
  //   getCustomer: function () {
  //     for (let i = 0; i < hours.length; i++) {


  //       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

  //       this.cookiesPerHour.push(cookies);

  //       this.total += cookies;

  //     }


  //   },
  //   render: function () {
  //     let h2 = document.createElement('h2');
  //     parentElement.appendChild(h2);
  //     h2.textContent = this.name;

  //     let ul = document.createElement('ul');
  //     parentElement.appendChild(ul);

  //     for (let i = 0; i < hours.length; i++) {
  //       let li = document.createElement('li');
  //       ul.appendChild(li);
  //       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
  //     }

  //     let total = document.createElement('li');
  //     ul.appendChild(total);
  //     total.textContent = `Total: ${this.total} cookies`;
  //   }
  // };

  // let tokyo = {
  //   name: 'Tokyo',
  //   minCust: 3,
  //   maxCust: 24,
  //   agvCookie: 1.2,
  //   cookiesPerHour: [],
  //   total: 0,
  //   getCustomer: function () {
  //     for (let i = 0; i < hours.length; i++) {


  //       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

  //       this.cookiesPerHour.push(cookies);

  //       this.total += cookies;

  //     }


  //   },
  //   render: function () {
  //     let h2 = document.createElement('h2');
  //     parentElement.appendChild(h2);
  //     h2.textContent = this.name;

  //     let ul = document.createElement('ul');
  //     parentElement.appendChild(ul);

  //     for (let i = 0; i < hours.length; i++) {
  //       let li = document.createElement('li');
  //       ul.appendChild(li);
  //       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
  //     }

  //     let total = document.createElement('li');
  //     ul.appendChild(total);
  //     total.textContent = `Total: ${this.total} cookies`;
  //   }
  // };
  // let Dubai = {
  //   name: 'Dubai',
  //   minCust: 11,
  //   maxCust: 38,
  //   agvCookie: 3.7,
  //   cookiesPerHour: [],
  //   total: 0,
  //   getCustomer: function () {
  //     for (let i = 0; i < hours.length; i++) {


  //       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

  //       this.cookiesPerHour.push(cookies);

  //       this.total += cookies;

  //     }


  //   },
  //   render: function () {
  //     let h2 = document.createElement('h2');
  //     parentElement.appendChild(h2);
  //     h2.textContent = this.name;

  //     let ul = document.createElement('ul');
  //     parentElement.appendChild(ul);

  //     for (let i = 0; i < hours.length; i++) {
  //       let li = document.createElement('li');
  //       ul.appendChild(li);
  //       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
  //     }

  //     let total = document.createElement('li');
  //     ul.appendChild(total);
  //     total.textContent = `Total: ${this.total} cookies`;
  //   }
  // };
  // let Paris = {
  //   name: 'Paris',
  //   minCust: 20,
  //   maxCust: 38,
  //   agvCookie: 2.3,
  //   cookiesPerHour: [],
  //   total: 0,
  //   getCustomer: function () {
  //     for (let i = 0; i < hours.length; i++) {


  //       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

  //       this.cookiesPerHour.push(cookies);

  //       this.total += cookies;

  //     }


  //   },
  //   render: function () {
  //     let h2 = document.createElement('h2');
  //     parentElement.appendChild(h2);
  //     h2.textContent = this.name;

  //     let ul = document.createElement('ul');
  //     parentElement.appendChild(ul);

  //     for (let i = 0; i < hours.length; i++) {
  //       let li = document.createElement('li');
  //       ul.appendChild(li);
  //       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
  //     }

  //     let total = document.createElement('li');
  //     ul.appendChild(total);
  //     total.textContent = `Total: ${this.total} cookies`;
  //   }
  // };
  // let Lima = {
  //   name: 'Lima',
  //   minCust: 2,
  //   maxCust: 16,
  //   agvCookie: 4.6,
  //   cookiesPerHour: [],
  //   total: 0,
  //   getCustomer: function () {
  //     for (let i = 0; i < hours.length; i++) {


  //       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

  //       this.cookiesPerHour.push(cookies);

  //       this.total += cookies;

  //     }


  //   },
  //   render: function () {
  //     let h2 = document.createElement('h2');
  //     parentElement.appendChild(h2);
  //     h2.textContent = this.name;

  //     let ul = document.createElement('ul');
  //     parentElement.appendChild(ul);

  //     for (let i = 0; i < hours.length; i++) {
  //       let li = document.createElement('li');
  //       ul.appendChild(li);
  //       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
  //     }

  //     let total = document.createElement('li');
  //     ul.appendChild(total);
  //     total.textContent = `Total: ${this.total} cookies`;
  //   }
  // };

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

  // function getRandomCustomer(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }



  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'];

  let salesdata = document.getElementById('salesdata');
 


  function CookieStand(name, min, max, avg) {
  this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.agvCookie = avg;
    this.cookiesPerHour = [];
    this.total = 0;
    // this.userName=userName
    CookieStand.allCookies.push(this);
  
  }
  CookieStand.allCookies = [];

  CookieStand.prototype.getCustomer = function () {
    for (let i = 0; i < hours.length; i++) {


      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;

    }
  }

  CookieStand.prototype.render = function () {
    let tr = document.createElement('tr');
    salesdata.appendChild(tr);

    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = this.cookiesPerHour[i];
    }

    let total = document.createElement('th');
    tr.appendChild(total);
    total.textContent = this.total;
  };

  let seattle = new CookieStand('Seattle', 23, 65, 6.3);
  let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
  let dubai = new CookieStand('Dubai', 11, 38, 3.7);
  let paris = new CookieStand('Paris', 20, 38, 2.3);
  let lima = new CookieStand('lima', 2, 16, 4.6);
 
  makeTableHeader();

  seattle.getCustomer();
  seattle.render();

  tokyo.getCustomer();
  tokyo.render();

  dubai.getCustomer();
  dubai.render();

  paris.getCustomer();
  paris.render();

  lima.getCustomer();
  lima.render();


  function makeTableHeader() {
    let tr = document.createElement('tr');
    salesdata.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Ctiy';

    for (let i = 0; i < hours.length; i++) {
      let th2 = document.createElement('th');
      tr.appendChild(th2);
      th2.textContent = hours[i];
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'Daily totals';
  }

  function makeTableFooter() {

    let tr = document.createElement('tr');
    salesdata.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'TOTALS';

    let hourlyTotal = 0;
    let totalOfTotals = 0;
    for (let i = 0; i < hours.length; i++) {
      hourlyTotal = 0;
      for (let j = 0; j < CookieStand.allCookies.length; j++) {

        let total = CookieStand.allCookies[j].cookiesPerHour[i];
        hourlyTotal += total;
        totalOfTotals += total;
      }
      let th2 = document.createElement('th');
      tr.appendChild(th2);
      th2.textContent = hourlyTotal;
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = totalOfTotals;
  }
  



  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// newStand.render();
// subRender();


// let formjs= getElementById('formjs');

  function fromSubmit (event) { 
    event.preventDefault()

    let name = event.target.name.value;
    let max = event.target.max.value;
    let min = event.target.min.value;
    let average = event.target.average.value;
    
     
    
    
  
    let newStand = new CookieStand(name,min,max,average);
  console.log(newStand);


  let rowcounter = salesdata.rows.length    
  salesdata.deleteRow(rowcounter-1)   

  newStand.getCustomer();
  newStand.render()
  
  makeTableFooter();
  }
  makeTableFooter();
  formjs.addEventListener('submit',fromSubmit);