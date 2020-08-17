/**
 * Author: Mansur Mansur
 * 
 * Description: This program contains a function that takes in a string and counts vowels
 *              😁
 */

 //function name: vowelCount()
 //parameter: str
 //algorithmn:
 //         1. create count variable
 //         2. loop through the string and increment count if their is vowel
 //         3. return count
 function vowelCount(str){
     //variable
     const vowel = "aeiou"
     let count = 0;

     //loop through the string
     for (let i= 0; i< str.length; i++) {
       if (vowel.includes(str[i])) {
           count++;
       }
     }

     //return the value
     return count;
 }


 //invoke the method
 console.log("There are "+ vowelCount("i am Mansur Mansur.") +" vowels in the string.")