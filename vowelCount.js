/**
 * Author: Mansur Mansur
 * 
 * Description: This program contains a function that takes in a string and counts vowels
 *              😁
 */

 //global variable 
 const vowel = ['a','e', 'i','o','u','A','E','I','O','U']; //vowel arrays contains all the vowels


 //function name: vowelCount()
 //parameter: str
 //algorithmn:
 //         1. create count variable
 //         2. loop through the string and increment count if their is vowel
 //         3. return count
 function vowelCount(str){
     //variable
     let count = 0;

     //loop through the string
     for (let i= 0; i< str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if(str[i] == vowel[j]){
                count++;
                break;
            }
        }
     }

     //return the value
     return count;
 }


 //invoke the method
 console.log("There are "+ vowelCount("i am Mansur Mansur.") +" vowels in the string.")