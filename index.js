const leapYear = { January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31 }
let shedProduction = {}

let sellingPrice = 45;
let dailyProduction = 0;
let week = 7;
let year = 365;
let time;

const id1 = document.getElementById('total')
const id2 = document.getElementById('income')
const id3 = document.getElementById('leapYear')

function report() {

    shedProduction.1 = parseInt(document.getElementById('first.1').value);
    shedProduction.1 = parseInt(document.getElementById('first.1').value);
    shedProduction.1 = parseInt(document.getElementById('first.1').value);
    shedProduction.1 = parseInt(document.getElementById('first.1').value);

    function totalProduction() {
        let header = document.createElement(h3)
        header.textContent = "Milk produced per shed and Total milk produced"

        id1.appendChild(header)

        for (const property in shedProduction) {
            let shedDiv = document.createElement('p')

            shedDiv.innerHTML = 'Your production is shed $ {property} ${shedProduction[property]} litres per day'

            id1.appendChild(shedDiv)

            console.log('Your production is shed $ {property} ${shedProduction[property]} litres per day')
        }
        for (const x in shedProduction) {
            dailyProduction += shedProduction[x];
        }

        let totalDiv = document.createElement('p')

        totalDiv.innerHTML = 'Your production is shed ${dailyProduction} litres per day'

        id1.appendChild(totalDiv)

        console.log('Total production is $ {dailyProduction} litres per day')
    }

    // Function to calculate weekly revenue and yearly revenue
    function incomeOverTime() {
        let header2 = document.createElement('h3')
        header2.textContent = "Weekly and Yearly Revenues"

        id2.appendChild(header2)

        let weekDiv = document.createElement('p')

        weekDiv.innerHTML = 'Your weekly revenue is ${dailyProduction*week*selling price}'

        id1.appendChild(weekDiv)

        let monthDiv = document.createElement('p')

        monthDiv.innerHTML = 'Your yearly revenue is ${dailyProduction*year*selling price}'

        id1.appendChild(monthDiv)


        console.log('Your weekly revenue is ${dailyProduction*week*selling price')
        console.log('Your yearly revenue is ${dailyProduction*year*selling price')
    }

    // Function to calculate monthly Revenues in a leap year

    
}

