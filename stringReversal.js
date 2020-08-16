/**
 *  Author: Mansur Mansur                Date: 16th August, 2020
 * 
 *  Description: The program reverses the string given to it. it uses some of the string manipulation built 
 *                in functions such as split(), and also array built-n functions such as reverse(), and also join().
 * 
 *  
 * 
 */

 // function name: str_reverse
 // parameters: string
 // return: string
 // algorithm:
 //       1. create array and push all characters into the array
 //       2. reverse the array using reverse() function
 //       3. join all the characters into one string and return the value
 function str_reverse(sentence){
     
     let arr = new Array(); //array
     let word;

     //loop that goes through all the characters in the string
     let i; 
     for(i=0; i <sentence.length; i++){
        arr.push(sentence[i]);
    }

    
     //reverse
     arr.reverse();

     
     //join the 
     word = arr.join();

     //return
     return word;
 }


 //invoke the function and print it out
 console.log(str_reverse("I am Mansur"));
 
