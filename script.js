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



// function calAge1(birthyear){
//     const age = 2030 - birthyear;
//     return age;
// }

// console.log(calAge1(2001))


// Function declaration
// function calAge1(birthyear){
//     return 2030 - birthyear;
// }

// console.log(calAge1(2001));

// const age1 = calAge1(2001);
// console.log(age1);

// const age2 = calAge1(2002);
// console.log(age2);


// // Function expression
// const calAge3 = function(birthyear){
//     return 2037 - birthyear;
// }

// const age3 = calAge3(1991);
// console.log(age3)

// Arrow function
// const calAge2 = birthYear => 2037 - birthYear;
// const ageMain = calAge2(1991);
// console.log(ageMain)


// const yearRetirement = birthyear => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearRetirement(2001));

const yearRetirement = (birthyear, firstName) => {
    const age = 2025 - birthyear;
    const retirement = 65 - age;
    return `${firstName} have time left for retirement is ${retirement} years`;
}

console.log(yearRetirement(2001, 'Rejuan'));
console.log(yearRetirement(1999, 'Samian'));
