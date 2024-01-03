// let user = {
//     userName:"kavan",
//     loginCount:9,
//     signIn:true,
//     getUserDetail:function(){
//         console.log(`user name::${this.userName}`);
//         console.log(this);
//     }
// }

// console.log(user.userName);
// console.log(user.getUserDetail());
// console.log(this);


function user(username,logincount,signin){
    this.username=username;
    this.logincount=logincount;
    this.signin=signin;
    this.greeting=function(){
            console.log(`wel come ${this.username}`);
    }

    return  this;
}

let userone = new user("pd",23,true);
// console.log(userone);
// console.log(userone.greeting());
console.log(userone.constructor);
