// es6 module


// class User {
//     constructor(username, password, email) {
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encryptpassword() {
//         return `${this.password}abc`;
//     }

//     chageusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ob = new User("creative", "tea@gmail", "123");

// console.log(ob.encryptpassword());
// console.log(ob.chageusername());



// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


function User(username,password,email) {
    this.username=username
    this.password=password
    this.email=email
}


User.prototype.encryptpassword=function(){
    return `${this.password}123`;
}


let ob = new User("kavan","kt@fb.com","lt@gmail.com");
console.log(ob);
console.log(ob.encryptpassword());












