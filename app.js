'use strict';

// Store number 1
var store1 = {
  storeName: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookieAvgPerCust: 6.3,
  storeHoursStart: 6,
  storeHoursFinish: 20,
  cookiesArray: [],
  randomNumberCust: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers + 1);
  },
  generateList: function() {
    var storeNameH3 = document.getElementById('store-name1');
    storeNameH3.textContent = this.storeName;
    var total = 0;
    for (var i = 0; i <= (this.storeHoursFinish - this.storeHoursStart); i++) {
      var storeHours = document.getElementById('hour-store1');
      var storeHoursList = document.createElement('li');
      this.cookiesArray.push(Math.round(this.randomNumberCust() * this.cookieAvgPerCust));
      total += this.cookiesArray[i];
      var realTime = i + this.storeHoursStart;
      if (realTime < 12){
        storeHoursList.textContent = [realTime + ' am: ' + this.cookiesArray[i] + ' cookies'];
      }else if (realTime == 12) {
        storeHoursList.textContent = [realTime + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      } else {
        storeHoursList.textContent = [(realTime - 12) + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      }
      storeHours.appendChild(storeHoursList);
    }
    var totalH4 = document.getElementById('total-store1');
    totalH4.textContent = 'Total: ' + total + ' cookies';
  }
};
store1.generateList();

//Store number 2

var store2 = {
  storeName: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  cookieAvgPerCust: 1.2,
  storeHoursStart: 6,
  storeHoursFinish: 20,
  cookiesArray: [],
  randomNumberCust: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers + 1);
  },
  generateList: function() {
    var storeNameH3 = document.getElementById('store-name2');
    storeNameH3.textContent = this.storeName;
    var total = 0;
    for (var i = 0; i <= (this.storeHoursFinish - this.storeHoursStart); i++) {
      var storeHours = document.getElementById('hour-store2');
      var storeHoursList = document.createElement('li');
      this.cookiesArray.push(Math.round(this.randomNumberCust() * this.cookieAvgPerCust));
      total += this.cookiesArray[i];
      var realTime = i + this.storeHoursStart;
      if (realTime < 12){
        storeHoursList.textContent = [realTime + ' am: ' + this.cookiesArray[i] + ' cookies'];
      }else if (realTime == 12) {
        storeHoursList.textContent = [realTime + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      } else {
        storeHoursList.textContent = [(realTime - 12) + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      }
      storeHours.appendChild(storeHoursList);
    }
    var totalH4 = document.getElementById('total-store2');
    totalH4.textContent = 'Total: ' + total + ' cookies';
  }
};
store2.generateList();

//Store number 3
var store3 = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  cookieAvgPerCust: 3.7,
  storeHoursStart: 6,
  storeHoursFinish: 20,
  cookiesArray: [],
  randomNumberCust: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers + 1);
  },
  generateList: function() {
    var storeNameH3 = document.getElementById('store-name3');
    storeNameH3.textContent = this.storeName;
    var total = 0;
    for (var i = 0; i <= (this.storeHoursFinish - this.storeHoursStart); i++) {
      var storeHours = document.getElementById('hour-store3');
      var storeHoursList = document.createElement('li');
      this.cookiesArray.push(Math.round(this.randomNumberCust() * this.cookieAvgPerCust));
      total += this.cookiesArray[i];
      var realTime = i + this.storeHoursStart;
      if (realTime < 12){
        storeHoursList.textContent = [realTime + ' am: ' + this.cookiesArray[i] + ' cookies'];
      }else if (realTime == 12) {
        storeHoursList.textContent = [realTime + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      } else {
        storeHoursList.textContent = [(realTime - 12) + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      }
      storeHours.appendChild(storeHoursList);
    }
    var totalH4 = document.getElementById('total-store3');
    totalH4.textContent = 'Total: ' + total + ' cookies';
  }
};
store3.generateList();

//Store number 4
var store4 = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  cookieAvgPerCust: 2.3,
  storeHoursStart: 6,
  storeHoursFinish: 20,
  cookiesArray: [],
  randomNumberCust: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers + 1);
  },
  generateList: function() {
    var storeNameH3 = document.getElementById('store-name4');
    storeNameH3.textContent = this.storeName;
    var total = 0;
    for (var i = 0; i <= (this.storeHoursFinish - this.storeHoursStart); i++) {
      var storeHours = document.getElementById('hour-store4');
      var storeHoursList = document.createElement('li');
      this.cookiesArray.push(Math.round(this.randomNumberCust() * this.cookieAvgPerCust));
      total += this.cookiesArray[i];
      var realTime = i + this.storeHoursStart;
      if (realTime < 12){
        storeHoursList.textContent = [realTime + ' am: ' + this.cookiesArray[i] + ' cookies'];
      }else if (realTime == 12) {
        storeHoursList.textContent = [realTime + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      } else {
        storeHoursList.textContent = [(realTime - 12) + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      }
      storeHours.appendChild(storeHoursList);
    }
    var totalH4 = document.getElementById('total-store4');
    totalH4.textContent = 'Total: ' + total + ' cookies';
  }
};
store4.generateList();

//Store number 5
var store5 = {
  storeName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookieAvgPerCust: 4.6,
  storeHoursStart: 6,
  storeHoursFinish: 20,
  cookiesArray: [],
  randomNumberCust: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers + 1);
  },
  generateList: function() {
    var storeNameH3 = document.getElementById('store-name5');
    storeNameH3.textContent = this.storeName;
    var total = 0;
    for (var i = 0; i <= (this.storeHoursFinish - this.storeHoursStart); i++) {
      var storeHours = document.getElementById('hour-store5');
      var storeHoursList = document.createElement('li');
      this.cookiesArray.push(Math.round(this.randomNumberCust() * this.cookieAvgPerCust));
      total += this.cookiesArray[i];
      var realTime = i + this.storeHoursStart;
      if (realTime < 12){
        storeHoursList.textContent = [realTime + ' am: ' + this.cookiesArray[i] + ' cookies'];
      }else if (realTime == 12) {
        storeHoursList.textContent = [realTime + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      } else {
        storeHoursList.textContent = [(realTime - 12) + ' pm: ' + this.cookiesArray[i] + ' cookies'];
      }
      storeHours.appendChild(storeHoursList);
    }
    var totalH4 = document.getElementById('total-store5');
    totalH4.textContent = 'Total: ' + total + ' cookies';
  }
};
store5.generateList();