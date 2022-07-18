"use strict"

function solution(str, ending) {
    if (str.endsWith(ending)) {
        return true
    }
    return false
}

let a = 'abcdef';
let b = 'def';

console.log(solution (a, b))