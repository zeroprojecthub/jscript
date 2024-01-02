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


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"karan",age:20});
    },1000);
})

promisethree.then(function(data){
    console.log(data);
});