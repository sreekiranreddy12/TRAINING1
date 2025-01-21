// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.l0g(30);
// },5000)
// setInterval(()=>{
//     console.l0g(30);
// },5000)
// console.log(40);

// const { reject } = require("async");

// console.log(50);
let p1 = new Promise((reslove, reject)=>{
   
});
console.log(p1);
let p2 = new Promise((reslove, reject)=>{
   reslove("success");
});
p2.then((response)=>{console.log(response)});
p2.catch((error)=> {console.log(error)} );
p2.finally(() => {console.log("finally for both ")});

// let p3 = new Promise((reslove, reject)=>{
//     reject("success");
//     p2.catch(()=>{} );
//  });
//  console.log(p3);