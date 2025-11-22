/*let x=20;
let y=30;
console.log(x,y) 

console.log(5=="5")    //true(loose comparison)
console.log(5==="5")   //false(tight comparison)

*

for(let num of [2,3,4,5,]){  //to traverse the arrays
    console.log(num)
}



function add(a,b){
    c=a+b;
    return c
}
term=add(5,5)
console.log(term)


const add=(a,b)=>a+b;
let x=add(2,3)
console.log(x)


const data={
    'name':"Fawas",
    'age':22
};
// delete data.age
console.log(data)

// st=['khan','usman','ali']
for(let key in data){
    console.log(key,data[key])
}
 


let a=prompt("enter your name")
console.log(a)*/

let arr=[22,33,44,32,54,31,64,65]
// for(let x=0;x<arr.length-1;x++){
//     console.log(arr[x])
// }

// // arr.push(330)
// arr.pop()
// arr.shift()  //remove from the start
// arr.unshift(222)   // add to the start
// console.log(arr)

// let double=arr.map(num=>num*3)
// let fil=arr.filter(x=>x>60)
// let s=arr.reduce((sum,num)=>sum+num,0)
// let x=arr.filter(a=>a.includes(64));
// let z=arr.reduce((sum,num)=>sum+num,0);
// let max=arr.reduce((n,m)=>n>m?n:m);  //the reduce function reduces the entire array into a single value
// console.log(max);
// let min=arr.reduce((obj,ch)=>{
//     obj[ch]=(obj[ch] || 0)+1;
//     return obj;
// },{})
// /let result=arr.find((x,a)=>x===32)
// console.log(result)
let el_to_find=32
if (arr.includes(el_to_find)){
    let index=arr.indexOf(el_to_find)
    console.log(`element ${el_to_find} is present on the index ${index}`)
}
else{
    console.log("the element is not found in the array")
}