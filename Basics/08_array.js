const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const num = Array(1,2,5,22,33);

// console.log(typeof num,num);
// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(45);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// let newarr = myArr.join();

// console.log( myArr);
// console.log(typeof newarr, newarr);

// slice, splice

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros);

let allheroes = marvel_heros.concat(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[2][2]);

// console.log(allheroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray(another_array));
// console.log(Array.isArray("karan"));

// console.log(Array.from("Hitesh"));
// console.log(Array.from("3434-343"));
console.log(Array.from({name:"raj"}));   //important and interesting

let score1 = 100
let score2 = 200
let score3 = 300


let sc = Array.of(score1,score2,score3);
console.log(sc);
