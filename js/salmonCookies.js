'use srtict'

let container = document.getElementById('branches');
console.log(container);

const workHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
 
// Seattle branch
let Seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    totalOfDailySoldCoockies: 0, 
    soldCookiesPerHouer: [],
    randomCustomersNumPerHouer: [],
    //random Customer number
    getRandomCustomersNum : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.randomCustomersNumPerHouer.push(getRandomIntInclusive(this.min, this.max)) 
        }
    },
    // simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    getSoldCookiesPerHouer : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.soldCookiesPerHouer.push(Math.floor(this.randomCustomersNumPerHouer[i] * this.avg))
            this.totalOfDailySoldCoockies += this.soldCookiesPerHouer[i]; 
        }
    },
    //render function
    render : function(){
       let articleEl = document.createElement('article');
       container.appendChild(articleEl);
       let h2 = document.createElement('h2');
       articleEl.appendChild(h2);
       h2.textContent = `branch name: ${this.name}`;
       let listEl = document.createElement('ul');
       articleEl.appendChild(listEl);
       for (let i = 0 ; i < workHours.length ; i++){
           let listItem = document.createElement('li');
           listItem.textContent  = workHours[i] + ': ' + this.soldCookiesPerHouer[i]+' cookies';
           listEl.appendChild(listItem);
       }
       let listForTotal = document.createElement('li');
       listForTotal.textContent  = 'Total: '+ this.totalOfDailySoldCoockies+' cookies';
       listEl.appendChild(listForTotal);
    }
    

    }

Seattle.getRandomCustomersNum();
Seattle.getSoldCookiesPerHouer();
console.log(Seattle.render()); 

let h2l1 = document.createElement('h2');
         container.appendChild(h2l1);
         h2l1.textContent = `------------------------------------------------------------------------------------`;

// Tokyo branch
let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    totalOfDailySoldCoockies: 0, 
    soldCookiesPerHouer: [],
    randomCustomersNumPerHouer: [],
    //random Customer number
    getRandomCustomersNum : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.randomCustomersNumPerHouer.push(getRandomIntInclusive(this.min, this.max)) 
        }
    },
    // simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    getSoldCookiesPerHouer : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.soldCookiesPerHouer.push(Math.floor(this.randomCustomersNumPerHouer[i] * this.avg))
            this.totalOfDailySoldCoockies += this.soldCookiesPerHouer[i]; 
        }
    },
    //render function
    render : function(){
       let articleEl = document.createElement('article');
       container.appendChild(articleEl);
       let h2 = document.createElement('h2');
       articleEl.appendChild(h2);
       h2.textContent = `branch name: ${this.name}`;
       let listEl = document.createElement('ul');
       articleEl.appendChild(listEl);
       for (let i = 0 ; i < workHours.length ; i++){
           let listItem = document.createElement('li');
           listItem.textContent  = workHours[i] + ': ' + this.soldCookiesPerHouer[i]+' cookies';
           listEl.appendChild(listItem);
       }
       let listForTotal = document.createElement('li');
       listForTotal.textContent  = 'Total: '+ this.totalOfDailySoldCoockies+' cookies';
       listEl.appendChild(listForTotal);
    }
    

    }

Tokyo.getRandomCustomersNum();
Tokyo.getSoldCookiesPerHouer();
console.log(Tokyo.render());

let h2l2 = document.createElement('h2');
         container.appendChild(h2l2);
         h2l2.textContent = `------------------------------------------------------------------------------------`;

// Dubai branch
let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    totalOfDailySoldCoockies: 0, 
    soldCookiesPerHouer: [],
    randomCustomersNumPerHouer: [],
    //random Customer number
    getRandomCustomersNum : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.randomCustomersNumPerHouer.push(getRandomIntInclusive(this.min, this.max)) 
        }
    },
    // simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    getSoldCookiesPerHouer : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.soldCookiesPerHouer.push(Math.floor(this.randomCustomersNumPerHouer[i] * this.avg))
            this.totalOfDailySoldCoockies += this.soldCookiesPerHouer[i]; 
        }
    },
    //render function
    render : function(){
       let articleEl = document.createElement('article');
       container.appendChild(articleEl);
       let h2 = document.createElement('h2');
       articleEl.appendChild(h2);
       h2.textContent = `branch name: ${this.name}`;
       let listEl = document.createElement('ul');
       articleEl.appendChild(listEl);
       for (let i = 0 ; i < workHours.length ; i++){
           let listItem = document.createElement('li');
           listItem.textContent  = workHours[i] + ': ' + this.soldCookiesPerHouer[i]+' cookies';
           listEl.appendChild(listItem);
       }
       let listForTotal = document.createElement('li');
       listForTotal.textContent  = 'Total: '+ this.totalOfDailySoldCoockies+' cookies';
       listEl.appendChild(listForTotal);
    }
    

    }

Dubai.getRandomCustomersNum();
Dubai.getSoldCookiesPerHouer();
console.log(Dubai.render());

let h2l3 = document.createElement('h2');
         container.appendChild(h2l3);
         h2l3.textContent = `------------------------------------------------------------------------------------`;

// Paris branch
let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    totalOfDailySoldCoockies: 0, 
    soldCookiesPerHouer: [],
    randomCustomersNumPerHouer: [],
    //random Customer number
    getRandomCustomersNum : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.randomCustomersNumPerHouer.push(getRandomIntInclusive(this.min, this.max)) 
        }
    },
    // simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    getSoldCookiesPerHouer : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.soldCookiesPerHouer.push(Math.floor(this.randomCustomersNumPerHouer[i] * this.avg))
            this.totalOfDailySoldCoockies += this.soldCookiesPerHouer[i]; 
        }
    },
    //render function
    render : function(){
       let articleEl = document.createElement('article');
       container.appendChild(articleEl);
       let h2 = document.createElement('h2');
       articleEl.appendChild(h2);
       h2.textContent = `branch name: ${this.name}`;
       let listEl = document.createElement('ul');
       articleEl.appendChild(listEl);
       for (let i = 0 ; i < workHours.length ; i++){
           let listItem = document.createElement('li');
           listItem.textContent  = workHours[i] + ': ' + this.soldCookiesPerHouer[i]+' cookies';
           listEl.appendChild(listItem);
       }
       let listForTotal = document.createElement('li');
       listForTotal.textContent  = 'Total: '+ this.totalOfDailySoldCoockies+' cookies';
       listEl.appendChild(listForTotal);
    }
    

    }

Paris.getRandomCustomersNum();
Paris.getSoldCookiesPerHouer();
console.log(Paris.render());

let h2l4 = document.createElement('h2');
         container.appendChild(h2l4);
         h2l4.textContent = `------------------------------------------------------------------------------------`;

// Lima branch
let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    totalOfDailySoldCoockies: 0, 
    soldCookiesPerHouer: [],
    randomCustomersNumPerHouer: [],
    //random Customer number
    getRandomCustomersNum : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.randomCustomersNumPerHouer.push(getRandomIntInclusive(this.min, this.max)) 
        }
    },
    // simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
    getSoldCookiesPerHouer : function () {
        for(let i = 0 ; i < workHours.length ; i++){
            this.soldCookiesPerHouer.push(Math.floor(this.randomCustomersNumPerHouer[i] * this.avg))
            this.totalOfDailySoldCoockies += this.soldCookiesPerHouer[i]; 
        }
    },
    //render function
    render : function(){
       let articleEl = document.createElement('article');
       container.appendChild(articleEl);
       let h2 = document.createElement('h2');
       articleEl.appendChild(h2);
       h2.textContent = `branch name: ${this.name}`;
       let listEl = document.createElement('ul');
       articleEl.appendChild(listEl);
       for (let i = 0 ; i < workHours.length ; i++){
           let listItem = document.createElement('li');
           listItem.textContent  = workHours[i] + ': ' + this.soldCookiesPerHouer[i]+' cookies';
           listEl.appendChild(listItem);
       }
       let listForTotal = document.createElement('li');
       listForTotal.textContent  = 'Total: '+ this.totalOfDailySoldCoockies+' cookies';
       listEl.appendChild(listForTotal);
    }
    

    }

Lima.getRandomCustomersNum();
Lima.getSoldCookiesPerHouer();
console.log(Lima.render());

//test if the arrays are taking numbers or not
//  for(let i = 0 ; i < workHours.length ; i++){
//  console.log(Seattle.randomCustomersNumPerHouer[i]);
// }

// console.log('---------------');

// 
// for(let i = 0 ; i < workHours.length ; i++){
//     console.log(Seattle.soldCookiesPerHouer[i]);
//     
// }
// console.log('---------------');
// console.log(total);




