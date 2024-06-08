//task 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False
// result for each of the following:

//Tests for equality and inequality with strings
 //Tests using the lower case function
 //Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 //Tests using “and” and “or” operators
 //Test whether an item is in a array
 //Test whether an item is not in a array


 //equality & inequality
let myName = "Hadi";
console.log(myName=="Hadi");  //equal to
console.log(myName !=="hadi"); //not equal to


//numerics
let myNumber = 15;
console.log(myNumber !== 15);   
console.log(myNumber>5);  //greater than
console.log(myNumber>=5)        //greater than equal to
console.log(myNumber<=20);    //less than equal to
console.log(myNumber<20);      //less than


// And (&&) or (||)

let num1= 10;
let num2 =20;

console.log(num2 > num1 && num2 <num1);
//true cond             //false cond
console.log(num2 > num1 || num2 < num1);
//true cond              //false cond


//Array
let myArray = [12,24,"Hadi"];
let mystring = "Khan"
console.log(Array.isArray(myArray));
console.log(Array.isArray(mystring));











