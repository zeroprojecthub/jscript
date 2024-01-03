// const promiseone = new Promise(function(resolve,reject){
//         // do async task
//         // db call
//         setTimeout(function(){
//             console.log('async task completed');
//             resolve();
//             console.log('after resolve');
//         },1000);
// })

// promiseone.then(function(){
//     console.log('promised consume');
// })


// new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log('ASync task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('async task 2 reslove');
// })


// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"karan",age:20});
//     },1000);
// })

// promisethree.then(function(data){
//     console.log(data);
// });



// const promisefour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "karan", pasword: "12334" })
//         }
//         else {
//             reject('Something  went wrong');
//         }
//     }, 1000)
// })


// promisefour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => {
//     console.log('the promise is eiter resolve aur rejected');
// })


// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({user:"kavan",pass:"1234"})
//         }else{
//             reject('ERRROR: JS WENT WRONG')
//         }
//     },1000);
// })


//  async function consumeprimsefive(){
//     try{
//         const response =  await promisefive;
//         console.log(response);    
//     }catch(error){
//             console.log(error);
//     }
//    }

// consumeprimsefive();

// async function getAllUsers(){
//     try{

//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         console.log(data);

//     }catch(error){
//             console.log('E::',error);
//     }
// }

// getAllUsers();


// fetch('https://api.github.com/users/zeroprojecthub')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// promise.all