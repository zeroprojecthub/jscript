const user = {
    username:"karan",
    price:99,

    welcomemsg:function() {
        console.log(`This is ${user.username} your cart has ${user.price} rupeess`);
        console.log(this);
    }
}

// user.welcomemsg();
// user.username="sam";
// user.welcomemsg();

// console.log(this);

function chai()
{
let user="karan";
console.log(this.user);
}

// chai();
// let addtwo=(a,b)=>{return a+b}

// let addthree = (a,b,c)=>(a+b+c)
// console.log(addthree(5,6,7));

// const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(3, 4))

// Immediately Invoked Function Expressions (IIFE)


// (function tea() {
//     console.log('tea is connected');
// })();


// ((name)=>{
//     console.log(`You are drinking tea ${name}`);
// })('karan');















