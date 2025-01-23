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
// let p1 = new Promise((reslove, reject)=>{
   
// });
// console.log(p1);
// let p2 = new Promise((reslove, reject)=>{
//    reslove("success");
// });
// p2.then((response)=>{console.log(response)});
// p2.catch((error)=> {console.log(error)} );
// p2.finally(() => {console.log("finally for both ")});

// let p3 = new Promise((reslove, reject)=>{
//     reject("success");
//     p2.catch(()=>{} );
//  });
//  console.log(p3);
//!  API fetching
// function fetchusers(){
//    let response= fetch("https://jsonplaceholder.typicode.com/users");
//    response.then(result=>{

//        //return result.json().//then (data=>{
          
//          return result.json().then(data=>{
//             console.log(data);
//             let user=document.getElementById("store");
//             console.log(store);
//             data.map(user=>{
//                store.innerHTML +=`
//             <tr>
//             <td>${user.id}</td>
//             <td>${user.name}</td>

//             <td>${user.email}</td>

//             <td>${user.company.name}</td>

//             </tr>
//                `
//             })
//          });
//    //    })
//    })
//    .catch(err=>console.log(err))
// }
// fetchusers();
let p= new Promise((resolve, reject) => {
   setTimeout(() => {
           resolve("success");
   },5000)
});

async function demo() {
console.log("start");
let x=await p;
console.log(x);
console.log("end");
}
demo();


async function fetchUser(){
   let response = await fetch("https://jsonplaceholder.typicode.com/users");
   let data = await response.json();
   console.log(data);
}

fetchUser()