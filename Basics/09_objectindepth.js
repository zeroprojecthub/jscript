// singleton
// Object.create

// object literals
const mySym = Symbol("key1");
let jsUser={
    name:"karan",
    [mySym]:"mykey1",
    "full name":"karan raj",
    age:23,
    location:"gujarat",
    email:"karan@gmail.com",
    isLoggin:true,
    lastLoginDays:["monday","tuesday"]
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser);
// jsUser.email = "pd@chatgpt.com";

jsUser.greet=function() {
    console.log('hellow user');
    console.log(`Hellow JsUser ${this.name}`);
}
// console.log(jsUser.greet());      
// jsUser.greet();

//Singloton
let tinderUser = Object();


tinderUser.id="123abc";
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// const regularUser = {
//     email:"reg@gmail.com",
//     fullname:{
//        fname:"karan",
//        lname:"raj"
//     }
// }
// // console.log(tinderUser);
// console.log(regularUser.fullname.fname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
// console.log(obj3);

// obj3 = Object.assign(obj1,obj2);

// const obj3 = {...obj1,...obj2};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "j@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
]

// // console.log(tinder);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggin'));


const course = {
    coursename: "react and js",
    price: "999",
    courseInstructor: "kavan"
}

const {courseInstructor:indstu} = course;

// console.log(courseInstructor);
// console.log(indstu);


// json formate for data trnasfer
//  {                          
//     "name": "kavan",
//     "coursename": "js in marathi",
//     "price": "free"
//  }

/*

[
    {},
    {},
    {}
]

*/