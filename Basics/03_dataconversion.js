let num = "33"
let numvalue = Number(num)

num=true
numvalue = Number(num)

num=1
numvalue = Boolean(num)

num="33abc"
numvalue=Number(num)

num=null
numvalue=Number(num)

num=""
numvalue=Number(num)

num=33
numvalue=String(num)

console.log(num,typeof num);
console.log(numvalue,typeof numvalue);


