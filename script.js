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


// function fruitProcess(apple, oranges){
//     const juice = `This juice is made of ${apple} apples & ${oranges} oranges`
//     return juice;
// }

// console.log(fruitProcess(2,2));



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

// const yearRetirement = (birthyear, firstName) => {
//     const age = 2025 - birthyear;
//     const retirement = 65 - age;
//     return `${firstName} have time left for retirement is ${retirement} years`;
// }

// console.log(yearRetirement(2001, 'Rejuan'));
// console.log(yearRetirement(1999, 'Samian'));



// function cutoff (fruits){
//     return fruits * 4
// }

// function fruitProcess(apples, oranges) {

//     const applepieces = cutoff(apples);
//     const orangepieces = cutoff(oranges);


//     const juice = `This juice made of ${applepieces} apples and ${orangepieces} oranges`;
//     return juice;
// }

// console.log(fruitProcess(2,2));


// Arrow function
// const calAge2 = birthYear => 2037 - birthYear;
// const ageMain = calAge2(1991);
// console.log(ageMain)
















// Coding Exercise 5
// function calcAverage(score1, score2, score3){
//     const average = (score1 + score2 + score3)/3;
//     return average;
// }


// const dolphinsAverage = calcAverage(44, 23, 71);
// const koalasAverage = calcAverage(85, 54, 41);

// console.log(`Dolphins average score ${dolphinsAverage}`);
// console.log(`Koalas average score ${koalasAverage}`);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008);

console.log(friends[0]);
console.log(friends[1]);


console.log(friends.length); // 3
console.log(friends[friends.length - 1]); 

friends[1] = 'Jay';
console.log(friends);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const yearss = [1990, 1967, 2002, 2010, 2018];
const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
];
console.log(ages); 



const friendsB = ['Michael', 'Steven', 'Peter'];

friends.push('Jay');
console.log(friendsB); 
// Add to beginning
friends.unshift('John');
console.log(friendsB);