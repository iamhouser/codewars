"use strict"


function validatePIN (pin) {
    if (pin.length != 4 || pin.length != 6) {
        console.log()
        return false;
    }
    return true;
  }

  console.log(validatePIN('1234'));