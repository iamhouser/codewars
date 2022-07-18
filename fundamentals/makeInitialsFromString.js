"use strict";

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
    name = name.toUpperCase();
    console.log(name);
    name = name.split(' ');
    console.log(name);
    let letter1 = name[0].charAt(0);
    let letter2 = name[1].charAt(0);
    console.log(name[1]);
    return `${letter1}.${letter2}`;
}


// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }