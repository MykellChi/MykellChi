'use strict';

const firstBorn='Michael'
const secondBorn= 'Williams'
const mykByr= '1998'
const wilByr= '2000'
const theFirst= `${firstBorn} is the first child of Mr and Mrs Ugwu`
const theSecond=`${secondBorn} is the second child of Mr and Mrs Ugwu`

if(Number(wilByr) < Number(mykByr)){
    console.log(theSecond)
} else{
    console.log(theFirst)
}

const sam= 'neche';
const mike= 'sandra';
const ferd= 'joy';
const clinTon= 'jen';

const findOne= `${sam}, ${mike}, ${ferd}, ${clinTon} are girlfriends of samson, michael, ferdinard and clinton`;
const findTwo= `${sam},${mike}${ferd}${clinTon} are not girlfriends of samson, michael, ferdinard and clinton`;

if(sam){
    console.log(findOne)
} else{
    console.log(findTwo)
}

let myCars= 7;
const one= 'you have no cars yet. HUSTLE! and get yourself a sharp one'
const two= 'you have some really fast cars in your garage. like the Ferrari'

if (myCars) {
    console.log(two)
} else {
    console.log(one)
}
console.log(Boolean(myCars))

const favCars= 7;
const midCars= 10;
const slowCars= 20;

if (favCars===20) {
    console.log('you love cars indeed')
} else if (midCars!==10){
    console.log( 'Nice choice')
} else if(slowCars===12){
    console.log(`you do not like ${ferd} very much`)
} else{
    console.log(`${ferd}`)
}

favCars===7 ? console.log('you love cars indeed'): console.log(`you do not like ${ferd} very much`);


function gradOne (adYear) {
    const vsParty = 10 + adYear;
    return vsParty;
}

gradOne(2008);

const gradYear= gradOne(2008);
console.log(gradYear)

let hardWork = 50

function greatNess(needs){
    const result = needs + hardWork;
    return result;
}

const temperature=[8,7,6,5,4,9, greatNess(40)]


console.log(temperature[6])

temperature.push(34,35,37)

console.log(temperature)

