//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

/*for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}
*/

//your code...

var i = 0;
while (i<10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...


let a = 30;
let add = function() {
    a = a + 2;
}
let multiply = function() {
    b = a * 20;
}
let divide = function() {
    c = b / 10 ** 2
}
add();
multiply();
divide();

console.log(c);



/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

function logTorF (val) {
    if (val) {
        console.log("Truthy");
    } else {
        console.log("Falsy");
    }
}
logTorF(20);
console.log("-- Number 20 is not 0");

logTorF(0);
console.log("-- 0 holds not value");

logTorF("zero");
console.log("--zero is a string with quoatations");

console.log("--Const zero = 20 is truthy because it is locking a variable to a value");

logTorF(null);
console.log("--null is equivalent to undefined but nothing else");

logTorF("0");
console.log("-- string contains 0");

logTorF(!"");
console.log("-- really not sure at the momemt FIND OUT");

logTorF(125);
console.log("-- numbers not 0 are truthy");

console.log("Truthy")
console.log('()) => {console.log("hello TEKcamp!") has value');


logTorF({});
console.log("-- empty object");

logTorF(undefined);
console.log("-- equal to null");

logTorF("");
console.log("-- empty string");


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

/*const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}
*/

var day, log;
switch (new Date().getDay()) {
  case 1:
    day = "Monday";
    log = '- We got a long week ahead of us...';
    break;
  case 2:
    day = "Tuesday";
    log = "- still better than Monday, but LONG way to go still"

    break;
  case 3:
    day = "Wednesday";
    log = "- We are smack dab in the middle of the week"
    break;
  case 4:
    day = "Thursday";
    log = "- At night... the mood is right"
    break;
  case 5:
    day = "Friday";
    log = "- TGIF.  Friday truly is the best day of the week!"
}
    console.log(day + log)

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:

/*
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}

*/


const age = 10;

const minAdult = (age > 21) ? 'Adult' : 'Minor';

console.log(minAdult);

const teen = (age > 13 && age < 19) ? 'Teenager' : 'Not a Teenager';

console.log(teen);

const retired = (age > 65) ? 'Retired' : 'Still working';

console.log(retired);







/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

var aboutMe = {
name: 'Jeramie',
age: 38,
gender: 'male',
hobbies: 'woodworking',
profession: 'student',
education: 'Bachelors Degree',
learn: function() {
    return "A" + " " + this.profession + " " + "named" + " " + this.name;
    },

getAge: function() {
    return this.name + " " + "is" + " " + this.age + " " + "years old";
}
};

console.log(aboutMe.learn());

console.log(aboutMe.getAge());


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

const truck = {
    year: 2020,
    make: 'RAM',
    model: 1500,
    color: 'Black',
    drives: function() {
        return "I drive a" + " " + this.color + " " + this.year + " " + this.make + " " + this.model;
    }
}
    
console.log(truck.drives());


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

const dataTypes = {
    dataOne: 'Class',
    dataTwo: 'Strings',
    dataThree: 'Boolean',
    likeOne: function() {
        return "I like" + " " + this.dataOne + " " + "because, you can group attributes of an item into one data type."
    },
    likeTwo: function() {
        return "I like" + " " + this.dataTwo + " " + "because, it allows to represent textual data to users."
    }, 
    likeThree: function() {
        return "I like" + " " + this.dataThree + " " + "because, it real time it allows you to narrow a search."
    }
};
    console.log(dataTypes.likeOne());
    console.log(dataTypes.likeTwo());
    console.log(dataTypes.likeThree())
    

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


