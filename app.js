'use strict';

var totalStoreArray = [];
var storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function Store(name, minCustomers, maxCustomers, cookieAvgPerCust) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookieAvgPerCust = cookieAvgPerCust;
  this.hourlyData = [];
};

Store.prototype.numCookiesPerHour = function() {
  return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers + 1) * this.cookieAvgPerCust);
};



function renderTableHead() {
  var storeTable = document.getElementById('cookies-by-location');
  var storeHeaderRow = document.createElement('tr');
  var headerTH = document.createElement('th');
  headerTH.textContent = '';
  storeHeaderRow.appendChild(headerTH);
  storeTable.appendChild(storeHeaderRow);
  for (var i = 0; i < storeHoursArray.length; i++){
    headerTH = document.createElement('th');
    headerTH.textContent = storeHoursArray[i];
    storeHeaderRow.appendChild(headerTH);
  }
}


// Store.prototype.renderTableBody = function() {
//   var storeTable = document.getElementById('cookies-by-location');
//   var storeBodyRow = document.createElement('tr');
//   storeTable.appendChild(storeBodyRow);
//   var bodyRowHeader = document.createElement('th');
//   storeBodyRow.appendChild(bodyRowHeader);
//   bodyRowHeader.textContent = this.name;
//   for (var i = 0; i < storeHoursArray.length; i++) {
//     var listCookiesByHour = document.createElement('td');
//     listCookiesByHour.textContent = this.numCookiesPerHour();
//     storeBodyRow.appendChild(listCookiesByHour);
//   };
//};

Store.prototype.renderTableBody = function() {
  var storeTable = document.getElementById('cookies-by-location');
  var storeBodyRow = document.createElement('tr');
  storeTable.appendChild(storeBodyRow);
  var bodyRowHeader = document.createElement('th');
  storeBodyRow.appendChild(bodyRowHeader);
  bodyRowHeader.textContent = this.name;
  for (var i = 0; i < storeHoursArray.length; i++) {
    var listCookiesByHour = document.createElement('td');
    listCookiesByHour.textContent = this.numCookiesPerHour();
    storeBodyRow.appendChild(listCookiesByHour);
    this.hourlyData.push(listCookiesByHour.textContent);
  };
};


function renderTableFoot() {
  var storeTable = document.getElementById('cookies-by-location');
  var storeFootRow = document.createElement('tr');
  storeTable.appendChild(storeFootRow);
  var storeFootHeader = document.createElement('th');
  storeFootRow.appendChild(storeFootHeader);
  storeFootHeader.textContent = 'Totals';
  for (var i = 0; i < storeHoursArray.length; i++) {
    var totalSumCookies = document.createElement('td');
    storeFootRow.appendChild(totalSumCookies);
  }
};


renderTableHead();




//creating the store objects and creating arrays of store rows
var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArray = [pikeStore, seaTacStore, seattleCenter, capitolHill, alki];

//user fills out form and hits the submit button
var clickBtn = document.getElementById('stores-and-cookies');
clickBtn.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  var newStoreName = event.target.storeName.value;
  var newMinCust = parseInt(event.target.minCust.value);
  var newMaxCust = parseInt(event.target.maxCust.value);
  var newCookieAve = parseInt(event.target.cookieAvg.value);
  if (checkForNumber(newMinCust, newMaxCust, newCookieAve) === false) {
    return;
  }
  var newStore = new Store(newStoreName, newMinCust, newMaxCust, newCookieAve);
  storeArray.push(newStore);
  
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].renderTableBody();
   }
  var totArray = 0;
  for (i = 0; i < storeArray.length; i++) {
    totArray = totArray + parseInt(storeArray[i].hourlyData[0]);
  }
  console.log(totArray);
  renderTableFoot();
};
function checkForNumber(min, max, avg) {
  if ((isNaN(min)) || (isNaN(max)) || (isNaN(avg))) {
    alert('You have entered a value that is not a number!');
    return false;
  } else if (min > max) {
    alert('Your minimum value is greater than your maximum value');
    return false;
  }
};
