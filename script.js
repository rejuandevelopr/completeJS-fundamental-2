'use strict';

// let hasDrive = false;
// const passTest = true;

// if (passTest) hasDrive = true;
// if (hasDrive) console.log('He can drive')

// function logger (){
//     console.log("My name is Rejuan");
// }

// logger();



// function fruitProcess(apples, oranges){
//     const juice = `This nice juice made of ${apples} apples & ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcess(2,3))
// console.log(fruitProcess(6,8))


function fruitProcess(apple, oranges){
    const juice = `This juice is made of ${apple} apples & ${oranges} oranges`
    return juice;
}

console.log(fruitProcess(2,2));



function calAge1(birthyear){
    const age = 2030 - birthyear;
    return age;
}

console.log(calAge1(2001))