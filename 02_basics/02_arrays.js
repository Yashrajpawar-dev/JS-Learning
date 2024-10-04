const marvel_heroes =["Thor", "Ironman", "Spiderman"];

const DC_heroes = ["Superman", "Flash", "Batman"];

marvel_heroes.push(DC_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const AllHeroes = marvel_heroes.concat(DC_heroes);
console.log(AllHeroes);


const all_new_heroes = [...marvel_heroes, ...DC_heroes];

console.log(all_new_heroes);

const another_array = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10]]]

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);



console.log(Array.isArray("Yash"));
console.log(Array.from("Yash"));
console.log(Array.from({name:"Yash "}));// intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1, score2, score3));

