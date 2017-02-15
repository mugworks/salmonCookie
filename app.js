'use strict';

function Store(name, minCustomers, maxCustomers, cookieAvgPerCust) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookieAvgPerCust = cookieAvgPerCust;
  this.storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am',
    '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
};

Store.prototype.numCookiesPerHour = function() {
  return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers + 1) * this.cookieAvgPerCust);
};


function renderTableHead() {
  var hoursArray = ['', '6am', '7am', '8am', '9am', '10am', '11am',
    '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var storeTable = document.getElementById('cookies-by-location');
  var storeHeaderRow = document.createElement('tr');
  storeTable.appendChild(storeHeaderRow);
  for (var i = 0; i < hoursArray.length; i++){
    var listHours = document.createElement('th');
    listHours.textContent = hoursArray[i];
    storeHeaderRow.appendChild(listHours);
  }
};


Store.prototype.renderTableBody = function() {
  var storeTable = document.getElementById('cookies-by-location');
  var storeBodyRow = document.createElement('tr');
  storeTable.appendChild(storeBodyRow);
  var bodyRowHeader = document.createElement('th');
  storeBodyRow.appendChild(bodyRowHeader);
  bodyRowHeader.textContent = this.name;
  for (var i = 0; i < this.storeHoursArray.length; i++) {
    var listCookiesByHour = document.createElement('td');
    listCookiesByHour.textContent = this.numCookiesPerHour();
    storeBodyRow.appendChild(listCookiesByHour);
  };
};

function renderTableFoot() {
  var storeTable = document.getElementById('cookies-by-location');
  var storeFootRow = document.createElement('tr');
  storeTable.appendChild(storeFootRow);
  var storeFootHeader = document.createElement('th');
  storeFootRow.appendChild(storeFootHeader);
  storeFootHeader.textContent = 'Totals';
};


renderTableHead();

var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
pikeStore.renderTableBody();
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
seaTacStore.renderTableBody();
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.renderTableBody();
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
capitolHill.renderTableBody();
var alki = new Store('Alki', 2, 16, 4.6);
alki.renderTableBody();

renderTableFoot();

