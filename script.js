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

// const calAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(calAge(2001))


// const yearUntilRetire = function (birthYear) {
//     const age = 2025 - birthYear;
//     const yearLeft = 65 - age;
//     if (yearLeft < 0) {
//         return -1;
//     }

//     else {
//         return yearLeft
//     }



// }
// console.log(yearUntilRetire(1910));












// Coding Exercise 5
// function calcAverage(score1, score2, score3){
//     const average = (score1 + score2 + score3)/3;
//     return average;
// }


// const dolphinsAverage = calcAverage(44, 23, 71);
// const koalasAverage = calcAverage(85, 54, 41);

// console.log(`Dolphins average score ${dolphinsAverage}`);
// console.log(`Koalas average score ${koalasAverage}`);


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008);

// console.log(friends[0]);
// console.log(friends[1]);



























// console.log(friends.length); // 3
// console.log(friends[friends.length - 1]); 

// friends[1] = 'Jay';
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };
// const yearss = [1990, 1967, 2002, 2010, 2018];
// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length - 1]),
// ];
// console.log(ages); 



// const friendsB = ['Michael', 'Steven', 'Peter'];

// friends.push('Jay');
// console.log(friendsB); 
// // Add to beginning
// friends.unshift('John');
// console.log(friendsB);





// Arrays
// Part 1
// const friend1 = 'Samian';
// const friend2 = 'Rejuan';
// const friend3 = 'Ahmed';

// const friends = ['Samian', 'Rejuan', 'Ahmed']
// console.log(friends)

// const y = new Array(2001,2002,2003,2004);
// console.log(y)

// console.log(friends[1])

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends)

// Exercise 
// const calAge = function (birthYear){
//     return 2037 - birthYear;
// }

// const year = [2001,2002,2003,2004];

// const age1= calAge(year[0])
// const age2= calAge(year[1])
// const age3= calAge(year[year.length -1])
// console.log(age1, age2, age3)
// console.log(age2)
// console.log(age3)


// const ages = [calAge(year[0]), calAge(year[1]), calAge(year[year.length -1])]
// console.log(ages)

// const friends = ['Samian', 'Ahned', 'Rejuan'];
// console.log(friends)
// console.log(friends.length)

// friends.push('Jay')
// console.log(friends)

// friends.unshift('Hello world')
// console.log(friends)

// friends.pop()
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)


// friends.shift()
// console.log(friends)

// console.log(friends.indexOf('Samian'))
// console.log(friends.includes('Samian'))

// if (friends.includes('Samian')) {
//     console.log("You have friend name Samian")
// }


// // task 1
// function calcTip (value) {
//      if (value >= 50 && value <= 300) {
//         let mainTips = value*0.15
//         let totalBills = value + mainTips;
//         return console.log(`Steven will get ${mainTips} tips`);
//      }

//      else {
//         let mainTips = value*0.20
//         let totalBills = value + mainTips;
//         return console.log(`Steven will get gets ${mainTips} tips`);
//      }
// }

// calcTip(Number(prompt("Enter the bills value: ")));
// // task 1 end


// // task 2
// const bills = [125, 555, 44];
// const data1 = bills[0];
// const data2 = bills[1];
// const data3 = bills[2];
// calcTip(data1);
// calcTip(data2);
// calcTip(data3);
// // task 2 end 

// // task 3
// const tips1 = 125*0.15;
// const tips2 = 555*0.15;
// const tips3 = 44*0.15;

// const allTips = [tips1, tips2, tips3]
// console.log(allTips)
// // task 3 end

// // task 4 
// const total1 = bills[0] + tips1;
// const total2 = bills[1] + tips2;
// const total3 = bills[2] + tips3;
// const totals = [total1, total2, total3]
// console.log(totals)
// // task 4 end

// Function to calculate tip
// const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// // Test the function with a value of 100
// console.log(`Tip for bill 100 is: ${calcTip(100)}`);

// // Bills array
// const bills = [125, 555, 44];

// // Tips array using calcTip function
// const tips = bills.map(calcTip);

// // Totals array: bill + tip
// const totals = bills.map((bill, index) => bill + tips[index]);

// // Output
// console.log('Bills:', bills);
// console.log('Tips:', tips);
// console.log('Totals:', totals);





// Objects
// const rejuanArray = [
//     'Rejuanul',
//     'Islam',
//     2025-2001,
//     'Programmer',
//     ['Samian', 'Peter','Steven']
// ]


// const rejuan = {
//     firstName: 'Rejuanul',
//     lastName: 'Islam',
//     age: 2025 - 2001,
//     job: 'Freelancer',
//     friends: ['Samian', 'Peter', 'Steven']
// }
// console.log(rejuan.lastName);

// const nameKey = 'Name';
// console.log(rejuan['first' + nameKey]);
// console.log(rejuan['last' + nameKey]);


// // const interestedIn = prompt("What you want to know about Rejuan? Choose between firstName, lastName, age, job or friends");
// // rejuan.location = 'Chittagong'
// // console.log(rejuan[interestedIn]);


// // Challenge
// // "Rejuan has 3 friends, and his best friend is called Samian"
// console.log(`${rejuan.firstName} has ${rejuan.friends.length} friends, and his 
//     best friend is called ${rejuan.friends[0]}`)






// const firstName = 'Rejuanul Islam';
// const rejuan = [firstName, 24, 'Chittagong']
// console.log(rejuan);
// console.log(rejuan.length);

// const calAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const yearss = [1992, 1998]
// console.log(calAge(years));

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[0]);

// console.log(age1)


// Objects Methods
// const rejuan = {
//     firstName: 'Rejuanul',
//     lastName: 'Islam',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['man1', 'man2', 'man3'],
//     hasDriversLicense: true,
//     calcAge: function () {

//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} ${this.lastName
//             }
//      is a ${this.calcAge()}-year old ${this.job}. He has ${this.friends.length
//             }
//      friends and ${this.hasDriversLicense ? 'a' : 'no'} driver's 
//     license.`;
//     },
// };
// console.log(rejuan.calcAge());
// console.log(rejuan.age);

// console.log(rejuan.getSummary());


// // The for Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// } 




// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }


// const forArray = [
//     'Rejuanul',
//     'Islam',
//     2025 - 2001,
//     'Chittagong',
//     'Freelancer',
//     ['Michael', 'Peter'],
//     true
// ]

// // for (let i = 0; i <= 5; i++) {
// //     console.log(forArray[i])
// // }

// const type = [];

// for (let i = 0; i < forArray.length; i++) {
//     console.log(forArray[i], typeof forArray[i]);

//     // type[i] = typeof forArray [i];
//     type.push(typeof forArray[i])
// }

// console.log(type);


// const yearss = [1992, 1996, 2001, 2001];
// const ages = [];

// for (let i = 0; i < yearss.length; i++) {
//     ages.push(2025 - yearss[i]);
// }
// console.log(ages)



// // Continue and break
// console.log('--Only string--')
// for (let i = 0; i < yearss.length; i++) {
//     if (typeof forArray[i] !== 'string') continue;

//     console.log(forArray[i], typeof forArray[i])
// }



const forArray = [
    'Rejuanul',
    'Islam',
    2025 - 2001,
    'Chittagong',
    'Freelancer',
    ['Michael', 'Peter'],
]

for ( let i = forArray.length - 1; i >= 0; i--) {
    console.log(i, forArray[i])
}


for (let exercise = 1; exercise < 4; exercise++ ){
    console.log(`---- Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++ ){
        console.log(`Lifting weights ${rep}`)
    }
} 







// const rejuansArray = [
//     'Rejuanul',
//     'Islam',
//     2025 - 2001,
//     'Freelancer',
//     ['Michael', 'Peter', 'Steven'],
// ];

// for (let i = rejuansArray.length - 1; i >= 0; i--) {
//     console.log(rejuansArray[i]);
// }


// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`----- Starting exercise ${exercise} ------`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weights repetition
//   ${rep}    `);
//     }
// }




// const rejuanArray = [
//     'Rejuanul',
//     'Islam',
//     2025 - 2001,
//     'Freelancer',
//     ['Michael', 'Peter', 'Steven'],
// ];
// const types = [];
// for (let i = 0; i < rejuanArray.length; i++) {
//     console.log(rejuanArray[i], typeof rejuanArray[i]);

//     types.push(typeof rejuanArray[i]);
// }
// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);


// console.log('Strings');
// for (let i = 0; i < rejuanArray.length; i++) {
// if (typeof rejuanArray[i] !== 'string') continue;
// console.log(rejuanArray[i]);
// }


// console.log('Break');
// for (let i = 0; i < rejuanArray.length; i++) {
// if (typeof rejuanArray[i] === 'number') break;
// console.log(rejuanArray[i]);
// } 