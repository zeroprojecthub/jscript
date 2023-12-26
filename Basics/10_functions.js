
function sayMyName(){
    console.log("P");
    console.log("D");
}


// sayMyName();

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(name)
{
    if(!name)
    {
        console.log("Pleadse Enter user name");
        return
    }
    return `${name} just loggin`;
}

// console.log(loginUserMessage("rahul"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "kavan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

// handleObject({
//     username: "sam",
//     price: 399
// });


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200, 400, 500, 1000]));

/*    function scope   */

//var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
    
// }

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "karan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
}
// one()



// if (true) {
//     const username = "kishan"
//     if (username === "keyur") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);


/*   ---------------------------------  */
console.log(addone(33));
function addone(n)
{
    return n+1
}

// console.log(addtwo(22));

const addtwo=function(num){
    return num+2
}


