'use strict';

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
  headerTH = document.createElement('th');
  headerTH.textContent = 'TOTAL';
  storeHeaderRow.appendChild(headerTH);
};



Store.prototype.renderTableBody = function() {
  var storeTable = document.getElementById('cookies-by-location');
  var storeBodyRow = document.createElement('tr');
  storeTable.appendChild(storeBodyRow);
  var bodyRowHeader = document.createElement('th');
  storeBodyRow.appendChild(bodyRowHeader);
  bodyRowHeader.textContent = this.name;
  var totCookies = 0;
  for (var i = 0; i < storeHoursArray.length; i++) {
    var listCookiesByHour = document.createElement('td');
    listCookiesByHour.textContent = this.numCookiesPerHour();
    storeBodyRow.appendChild(listCookiesByHour);
    this.hourlyData.push(listCookiesByHour.textContent);
    totCookies += parseInt(this.hourlyData[i]);
  };
  var totalCookiesByLoc = document.createElement('td');
  storeBodyRow.appendChild(totalCookiesByLoc);
  totalCookiesByLoc.textContent = totCookies;
};


function renderTableFoot() {
  var storeTable = document.getElementById('cookies-by-location');
  var storeTableFooter = document.createElement('tfoot');
  var storeFootRow = document.createElement('tr');
  var storeFootHeader = document.createElement('th');
  var totSum = document.createElement('td');
  var totCookiesOverall = 0;
  var totalSumCookies;
  var totArray;

  storeTable.appendChild(storeTableFooter);
  storeTableFooter.appendChild(storeFootRow);
  storeFootRow.appendChild(storeFootHeader);
  storeFootHeader.textContent = 'TOTALS';

  for (var i = 0; i < storeHoursArray.length; i++) {
    totArray = 0;
    totalSumCookies = document.createElement('td');

    for (var j = 0; j < storeArray.length; j++) {
      totArray = totArray + parseInt(storeArray[j].hourlyData[i]);
    }

    totCookiesOverall = totCookiesOverall + parseInt(totArray);
    storeFootRow.appendChild(totalSumCookies);
    totalSumCookies.textContent = totArray;
  }

  storeFootRow.appendChild(totSum);
  totSum.textContent = totCookiesOverall;
};


//creating the store objects and creating arrays of store rows
var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArray = [pikeStore, seaTacStore, seattleCenter, capitolHill, alki];
//Initiate table
renderTableHead();
for (var i = 0; i < storeArray.length; i++) {
  storeArray[i].renderTableBody();
}
renderTableFoot();


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


  storeArray[storeArray.length - 1].renderTableBody();
  removeTableFoot(); //clear out the totals row
  renderTableFoot();
  clickBtn.reset(); //clears the text boxes in the form
};


//check to make sure that the values for minCustomers, maxCustomers and cookieAverage are numbers and that the minimum number is smaller than the maximum
function checkForNumber(min, max, avg) {
  if ((isNaN(min)) || (isNaN(max)) || (isNaN(avg))) {
    alert('You have entered a value that is not a number!');
    return false;
  } else if (min > max) {
    alert('Your minimum value is greater than your maximum value');
    return false;
  }
};

function removeTableFoot() {
  var storeTable = document.getElementById('cookies-by-location');
  storeTable.deleteTFoot();
};

