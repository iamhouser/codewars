"use strict"

// Given a year, return the century it is in.


function century(year){
    if (year % 100 == 0){
        return (Math.floor(year / 100))
    }

    return (Math.floor((year / 100) + 1))
}


console.log(century(89));


// const century = year => Math.ceil(year/100)
