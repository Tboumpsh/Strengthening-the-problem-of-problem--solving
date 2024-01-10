/*
about us project💫

 Name of the programmer:
1- Fateme Satouri

project name :
Strengthening the problem

Project description:
A training project to strengthen the problem

start date:
january 9

end of the project:
january 10

email:navayearamm@gmail.com
 */

/*
>>one

Algorithm Bubble Search :

This algorithm is to search for a presentation.
The prevalence of work in this algorithm is as follows:
Take the first number in the presentation and compare it regularly to the rest of the numbers so you can get the maximum and minimum amount
*/

// let myArray = [1, 2, 3, 5, 6, 5, 0, 20, 22, 70, 33, 90, 7, 10 , -1];

// let max = 1;
// let min = 1;
// for (let i = 0; i <s myArray.length; i++) {
//   if (max < myArray[i]) {
//     max = myArray[i];
//   }
//   if (min > myArray[i]) {
//     min = myArray[i];
//   }
// }
// console.log("maximum number in array is : " + max);
// console.log("minimum number in array is : " +  min);

// finish

/*
 >>Tow

Calculating Factor in JavaScript :

Getting the factorial factor of each number.
I know that in JavaScript there is a predetermined function to obtain the factor of each number and calculations, but to enhance the problem of problem solving it is best to try it yourself with simple things.
I tried to look at it in a simple way to solve this question as I tried to make my code fixed. I used Promt to enter the number. And then I tried to calculate the factor with a While loop and cut the seed to the seed. It is true that it should be zero, but because my loop condition was larger than 1 it takes zero but does not calculate.
*/

// let number = Number(prompt("Enter your number"));
// let sum = 1;

// if (Number.isInteger(number) && number >= 0) {
//   while (number >= 1) {
//     sum *= number;
//     number--;
//   }
//   console.log("my Factorial is:" +" "+  sum);
// } else {
//   console.log("Invalid input. Please enter a non-negative integer.");
// }

// finish

/*
>> three 

search in string :

We got to the third issue, we tried here to do some interesting things using different methods in strangs.
And we selected the text and straps to the user and used both Return and Console Log to say that both methods are right.
*/

function findString(str1, str2, text) {
  let str11 = String(str1);
  let str22 = String(str2);
  let text1 = String(text);
  let findIndex1 = text1.indexOf(str11);
  let findIndex2 = text1.indexOf(str22);
  /*
In conclusion, both indexOf() and search() methods are useful for searching for a substring within a given string. However, they have a few key differences that make them suitable for different use cases. The indexOf() method is faster and more suitable for simple string searches, while the search() method supports regular expressions and is more suitable for complex pattern matching. It's important to choose the appropriate method based on the specific requirements of your program.
  */
  // let searcher1 = text1.search(str11);
  // let searcher2 = text1.search(str22);
  let inc1 = text1.includes(str11);
  let inc2 = text1.includes(str22);
  let filler = text1.replace(str11, str22);
  let merge = text1.concat(str11, str22);
  // let x = text1.matchAll(str11 , str22)
  let sub = text1.substring(str11, str22);
  let convert = Array.from(str11);

  // clg start
  console.log(findIndex1);
  console.log(findIndex2);
  // console.log(searcher1);
  // console.log(searcher2);
  console.log(inc1);
  console.log(inc2);
  console.log(filler);
  console.log(merge);
  console.log(sub);
  console.log(convert);

  // use return

  // return `find is ${findIndex1} and ${findIndex2}.
  // include is: ${inc1} and ${inc2}.
  // replace two string ${filler}.`
}

// call function
findString("hello", "Me", "hello Im fatemeh");

// finish
