"use strict"


// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.



function findShort(s) {
    s = s.split(' ');
    console.log(s);
    let value = s[0].length;
    console.log(value);
    for (let i = 1; i < s.length; i++) {
        if (value < s[i].length) {
            continue;
        } else {
            value = s[i].length;
        }
    }
    return value
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }