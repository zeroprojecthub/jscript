// Dates


let mydate = new Date();

// console.log(typeof mydate,mydate);
// console.log(typeof mydate,mydate.toString());
// console.log(typeof mydate,mydate.toDateString());
// console.log(typeof mydate,mydate.toLocaleString());


// let mycreatedate = new Date(2023,11,26);
// let myCreatedDate = new Date(2023, 11, 25, 9, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("2-24-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(myTimeStamp);

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate);


console.log(`${newDate.getDay()} and the time `);
newDate.toLocaleString('default', {
    weekday: "long",
    
})