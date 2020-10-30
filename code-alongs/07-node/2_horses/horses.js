console.log('no horses were harmed during the making of this exercise');

let horses = [{
        name: 'maythehorsebewithu',
        active: true,
        country: 'AUS',
        yearOfBirth: 2000,
        hourlyRate: 85,
        daysWorked: 400
    },
    {
        name: 'my wife knows everthing',
        active: true,
        country: 'USA',
        yearOfBirth: 2007,
        hourlyRate: 50,
        daysWorked: 250
    },
    {
        name: 'better loosen up',
        active: false,
        country: 'AUS',
        yearOfBirth: 1985,
        hourlyRate: 15,
        daysWorked: 200
    },
    {
        name: 'hoof hearted',
        active: false,
        country: 'AUS',
        yearOfBirth: 1981,
        hourlyRate: 150,
        daysWorked: 100
    },
    {
        name: 'pony',
        active: false,
        country: 'AUS',
        yearOfBirth: 2003,
        hourlyRate: 30,
        daysWorked: 700
    },
    {
        name: 'sunny boy',
        active: true,
        country: 'AUS',
        yearOfBirth: 2003,
        hourlyRate: 110,
        daysWorked: 515
    }
]

// My solution
let totalEarnings = 0
horses.forEach(horse => {
        let earnings = horse.hourlyRate * horse.daysWorked * 8
        if (horse.country === "AUS" && earnings > 30000) {
            totalEarnings += earnings
        }
    })
    // console.log(totalEarnings)

//DT's function programming approach
const isAussie = horse => horse.country === 'AUS'
const calculateEarnings = horse => horse.daysWorked * 8 * horse.hourlyRate
const sum = (total, earnings) => total + earnings

//dont have to take out the functions, he would leave the short ones in, or ones that cant be reused
let totalEarnings3 =
    horses.filter(isAussie)
    .map(calculateEarnings)
    .filter(earnings => earnings > 30000)
    .reduce(sum)

console.dir(totalEarnings3)