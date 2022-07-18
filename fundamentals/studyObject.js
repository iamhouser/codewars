"use strict"



// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     }
// }
// let user = makeUser('John', 24);
// console.log(user.age);

// let user = {
//     // name: 'Name',
//     // age: 30,
// };


// function isEmpty(oobj){
//     for (let key in oobj){
//         return true;
//     }
//     return false;
// }

// console.log(isEmpty(user));


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};


// let sum = 0;

// function salary(obj){
//     for (let key in obj) {
//         sum = obj[key] + sum;
//     }
//     return sum;
// };

// console.log(salaries.John);
// console.log(salary(salaries));



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function sum(obj){
    for (let key in obj) {
        if (typeof obj[key] === Number){
           obj.key = obj[key] * 2;
           console.log(obj[key]);
        }
        continue
    }
    return obj;
}

console.log(sum(menu));
