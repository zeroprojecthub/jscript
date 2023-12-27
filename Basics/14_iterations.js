// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    // console.log(element);
    
}

// console.log(element);
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);

// }

//  break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }


let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);


let numbers = [33,44,5,6,76,7];

// for (const num of numbers) {
//         console.log(num);
// }

// let name = "good morning";

// for (const letter of name) {
//     console.log(`each letter is ${letter}`);
// }

// const map = new Map()

// map.set("one",1);
// map.set("two",2);
// map.set("three",3);
// map.set("four",4);
// map.set("four",4);
// console.log(map);
 
// const map1 = new Map()

// map1.set('IN', "India")
// map1.set('USA', "United States of America")
// map1.set('Fr', "France")
// map1.set('IN', "India")

// console.log(map1);
// for(let [key,value] of map1)
// {
//     console.log(key,':-',value);
// }

//  for of will not iterate over object

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for(const [key,value] of myObject)
// {
//     console.log(key,':-',value);
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//    console.log(`${key} is shortcut of ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }


const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key] in map) {
    console.log(key);
}


