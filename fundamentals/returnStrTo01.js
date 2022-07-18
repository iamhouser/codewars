"use strict"

function convert(data) {
    data.split('');
    let result = [];

    for (let i = 0; i < data.length(); i++) {
        if (data[i] >= 5) {
           result.push('0');
        }
        
        result.push('0');
    
    }
    return result
    
}

console.log(convert('1246755'))