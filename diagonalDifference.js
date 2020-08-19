/**
 * PROBLEM: Given a square matrix, calculate the absolute difference between the sums of its diagonals. for example, the square matrix arr is 
 *          below: 
 *          [[1,2,3],
 *           [4,5,6],
 *           [9,8,9]]
 *          The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 
 *          | 15 - 17 | = 2
 * 
 */

 //function description: The function takes multidimentional array as parameter, it calculates the diagonals and returns the difference
 function diagonalDifference(arr){
     let sumLeftToRight = 0; let sumRightToLeft = 0;


     for (let i = 0, j = arr.length-1; i < arr.length; i++) {
         //diagonal from left to right
         sumLeftToRight += arr[i][i];
         //diagonal from right to left
         sumRightToLeft += arr[i][j];
         j--;
     }


     return Math.abs(sumLeftToRight-sumRightToLeft);
 }


 //invoke 
 console.log("The absolute difference of the diagonals are: "+diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));