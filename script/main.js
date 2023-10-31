const firstName = "Oskar";
const age = "25";

console.log(`Cześć, nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector(".page-header__heading--js");

console.log(header.innerHTML);

header.innerHTML = `Siema jestem ${firstName} i mam ${age} lat.`;

const calculate = (myNumber) => {
myNumber = myNumber +3;
 console.log(myNumber);
  return myNumber*7;
} 
calculate(2)
calculate (3)
calculate(5)
const result = calculate(5)
console.log(result)


function hello() {
    console.log('hello')
}

hello()

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    commander: {
        name: 'Darth Baldshroom'
    }
}
deathStar.fire('sąsiad')
console.log(deathStar.name)