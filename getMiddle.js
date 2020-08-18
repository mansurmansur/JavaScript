/** 
 * DESCRIPTION: The function takes in a string and returns the middle character. if the length of the string is even, then get the two middle characters and 
 *              if the length of string is odd return the middle character.
 * 
 * ALGORITHM: 
 *         1. check if the length of the string is even
 *         2. if True then return the two middle characters 
 *         3. return the middle character - [for the length of strings that are odd]
 *         
 */
function getMiddleCharacter(str){
    let chars;

    if (str.length % 2 === 0) { //if the length of string is even
        chars = str.substring((str.length/2 -1), (str.length/2 + 1));
    } else {
        chars = str.charAt((str.length+1)/2 -1);
    }

    return chars;


    /**
     * 
     * another way to do this is;
     * 
     * if (str.length % 2 === 0) { //if the length of string is even
     *   return str.substring((str.length/2 -1), (str.length/2 + 1));
     * }
     * 
     * return str[Math.floor(str.length/2)];
     */

     
      /**
      * can be done also with ternary operators
      * 
      * return str.length %2  === 0 ? str.substring((str.length/2 -1), (str.length/2 + 1)) : str[Math.floor(str.length/2)]
      */
      
}


//invoke the function
console.log(getMiddleCharacter("test"));
