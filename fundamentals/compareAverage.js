"use strict"

// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    const sum = classPoints.reduce((total, amount) => total + amount); 
    let result = sum / classPoints.length;
    if (yourPoints > result) {
      return true;
    }
    return false;
  }


//   function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
//   }