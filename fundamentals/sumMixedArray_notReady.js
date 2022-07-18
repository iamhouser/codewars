"use strict"

let x = [9, 3, '7', '3'];


function sumMix(x) {
    for (let i = 0; i <= x.length; i++) {
        if (typeof x[i] === Number){
            continue
        } else {
            x[i] = +x[i];
        }
    }
    return x.reduce((a, b) => a + b);
}
