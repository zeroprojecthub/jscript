// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// coding.forEach((val)=>console.log(val));

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe);

// coding.forEach((item,idx,arr)=>{
//     console.log(item,idx,arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach((name)=>console.log(name.languageName));
// const namelist=myCoding.forEach((name)=>
//      name.languageName
// );

// console.log(namelist);
const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

// console.log(values);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
const newnum = myNums.filter((num)=>num>5)
// console.log(newnum);


let mnum = [];

myNums.forEach((num)=>{
    if(num>5){
        mnum.push(num);
    }
});

// console.log(mnum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let list=books.filter((book)=>book.edition==2010);
// console.log(list);

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);


//    map


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   let newmap= myNumers.map((num)=> {
        return num + 10
    })

    // console.log(myNumers);
    // console.log(newmap);


    //reduce

    // let total=myNumers.reduce((acc,curval)=>{
    //         return acc+curval
    // },0);

let total = myNumers.reduce(function (acc,curval) {
            return acc+curval    
},0);

    // console.log(total);

    const shoppingCart = [
        {
            itemName: "js course",
            price: 2999
        },
        {
            itemName: "py course",
            price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
        },
        {
            itemName: "data science course",
            price: 12999
        },
    ]

// const pricetopay = shoppingCart.reduce((acc,item)=>(acc+item.price),0);
const pricetopay = shoppingCart.reduce((acc,item)=>acc+item.price,0);

// console.log(pricetopay);
