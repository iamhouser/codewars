"use strict"

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

function areaPerimeter(l, w) {
    if (l == w) {
        return l * w;
    }

    return ((l + w) * 2);
}

let areaPerimeter = (l, w) => (l == w) ? l * w : ((l + w) * 2);


// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };