
//Q22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let friends:string[] = ["Almeera", "Urooj", "Roha", "Sana"];
console.log(friends[4]); //intentional Error: Arrays are 0 indexed, so index 4 is out of the bound.
console.log(friends[3]); //Correcting the error by accessing a valid index.


//Q23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car:string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); //False
//Test 1
let airline:string = "PIA";
console.log("Is airline == 'PIA'? I predict True.");
console.log(airline == 'PIA'); //true
console.log("Is airline == 'airblue'? I predict False.");
console.log(airline == 'airblue'); //false
//Test 2
let bike:string = "Heavy Bike";
console.log("Is bike == 'Heavy Bike'? I predict True.")
console.log(bike == 'Heavy Bike'); //true
console.log("Is bike == 'Honda CD70'? I predict False.")
console.log(bike == 'Honda CD70'); //False
//Test 3
let fabric:string = "Cotton";
console.log("Is fabric == 'Cotton'? I predict True.");
console.log(fabric == 'Cotton'); // true
console.log("Is fabric == 'Lawn'? I predict False.");
console.log(fabric == 'Lawn'); //false
//Test 4
let city:string = "Korea";
console.log("Is city == 'Korea'? I predict True.");
console.log(city == 'Korea'); //true
console.log("Is city == 'Japan'? I predict False.");
console.log(city == 'Japan'); //false
//Test 5
let color:string = "White";
console.log("Is color == 'White'? I predict True.");
console.log(color == 'White'); //true
console.log("Is color == 'Green'? I predict False.");
console.log(color == 'Green'); //false



//Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

//Equality with Strings
console.log("Testing with equlaity");
let fruit = "apple";
console.log(fruit == "apple");
console.log(fruit == "Apple");

//Testing using lowercase function
console.log("Testing with Lower case function");
console.log("Apple".toLowerCase() == "apple");
console.log("Apple".toLowerCase() == "Apple")

//Numerical Testing using Equality and inequality, greater than and less than , greater than or equal to and less than or equal to
console.log("Numerical Testing")
let num1 = 5;
console.log(num1 == 5);
console.log(num1 != 5);
console.log(num1>4);
console.log(num1<4);
console.log(num1<=6);
console.log(num1>=6);

//Testing with "And" and "or"
console.log("Testing with && and ||");
console.log(num1>0 && num1<10);
console.log(num1<0 && num1>10);
console.log(num1>0 || num1>90);
console.log(num1<0 || num1 >6);

// Test whether an item is in a array
console.log(" Test whether an item is in a array")
let scandenavian_countries:string[] = ["Sweden", "Denmark", "Norway", "Iceland", "Finland"];
console.log("Is Norway in Scandenavian Countries? ", scandenavian_countries.includes("Norway"));
console.log("Is Korea in Scandenavian Countries? ", scandenavian_countries.includes("Korea"));

// Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log("Is Japan not in Scandenavian Countries? ", !scandenavian_countries.includes("Japan"));
console.log("Is Finland not in Scandenavian Countries? ", !scandenavian_countries.includes("Finland"));




