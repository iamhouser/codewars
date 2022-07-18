"use strict"

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyDigit(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

multiplyDigit(menu);
multiplyDigit(menu);
multiplyDigit(menu);

console.log(menu);