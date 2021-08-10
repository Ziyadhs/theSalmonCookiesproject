'use srtict'

let container = document.getElementById('branches');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

const workHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let theShopsList = [];
 
//shops constructor
function shops(shopLocation, min, max, avgCookieSale) {
    this.shopLocation = shopLocation;
    this.min = min;
    this.max = max;
    this.avgCookieSale = avgCookieSale;
    this.totalOfDailySoldCoockies = 0;
    this.randomCustomersNumPerHouer = [];
    this.soldCookiesPerHouer = [];
    theShopsList.push(this)
}

    //random Customer number
    shops.prototype.getRandomCustomersNum = function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.randomCustomersNumPerHouer.push(getRandomIntInclusive(this.min, this.max))
        }
    }

    //simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    shops.prototype.getSoldCookiesPerHouer = function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.soldCookiesPerHouer.push(Math.floor(this.randomCustomersNumPerHouer[i] * this.avgCookieSale))
            this.totalOfDailySoldCoockies += this.soldCookiesPerHouer[i]; 
        }
    }

    //render the hours in header
    function createTableHeader() {
        let header = document.createElement('tr');
        tableEl.appendChild(header);
        let thEl1 = document.createElement('th');
        header.appendChild(thEl1);
        thEl1.textContent = 'Work hours';
        for (let i = 0; i < workHours.length; i++) {
            let thEl2 = document.createElement('th');
            header.appendChild(thEl2);
            thEl2.textContent = workHours[i];
        }
        let thEl3 = document.createElement('th');
        header.appendChild(thEl3);
        thEl3.textContent = 'Daily Location Total';
    }   
    createTableHeader();

    //render function for the table content
    shops.prototype.render = function (){
        let shop = document.createElement('tr');
        tableEl.appendChild(shop);
        let tdEl1 = document.createElement('td');
        shop.appendChild(tdEl1);
        tdEl1.textContent = this.shopLocation;
        // row data 
        for (let i = 0 ; i < workHours.length ; i++) {
            let tdEl2 = document.createElement('td');
            shop.appendChild(tdEl2);
            tdEl2.textContent = this.soldCookiesPerHouer[i];
        }
        tdEl3 = document.createElement('td');
        shop.appendChild(tdEl3);
        tdEl3.textContent = this.totalOfDailySoldCoockies;
    }
    

    //render the total of total salles in all shops perhour in footer
    function createTableFooter (){
        let totalOfsoldCookiesInAllShopsPerHouer = 0;
        let soldCookiesInAllShopsPerHouer = 0;
        let footer = document.createElement('tr');
        tableEl.appendChild(footer);
        let tdEl1 = document.createElement('td');
        footer.appendChild(tdEl1);
        tdEl1.textContent = 'Totals';
        // row data 
        for (let i = 0 ; i < workHours.length ; i++) {
            let tdEl2 = document.createElement('td');
            for(let j = 0 ; j < theShopsList.length ; j++){
                soldCookiesInAllShopsPerHouer += theShopsList[j].soldCookiesPerHouer[i]
            }
            footer.appendChild(tdEl2);
            tdEl2.textContent = soldCookiesInAllShopsPerHouer;
            totalOfsoldCookiesInAllShopsPerHouer += soldCookiesInAllShopsPerHouer;
            soldCookiesInAllShopsPerHouer = 0;
        }
        tdEl3 = document.createElement('td');
        footer.appendChild(tdEl3);
        tdEl3.textContent = totalOfsoldCookiesInAllShopsPerHouer;
    }

    
    
    //locations objects
    let seattle = new shops('Seattle', 23, 65, 6.3);
    let tokyo = new shops('Tokyo', 3, 24, 1.2);
    let dobai = new shops('Dubai', 11, 38, 3.7);
    let paris = new shops('Paris', 20, 38, 2.3);
    let lima = new shops('Lima', 2, 16, 4.6);

    //loop to call the functions
    for (let i = 0; i < theShopsList.length; i++) {
        theShopsList[i].getRandomCustomersNum();
        theShopsList[i].getSoldCookiesPerHouer();
        theShopsList[i].render();
    }
    createTableFooter ();





