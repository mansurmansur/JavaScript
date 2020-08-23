/**
 *  Problem: The program calculates the minimum sum or maximum sum possible in a given array. and prints them.
 * 
*/
function miniMaxSum(arr) {
    let min = 0, max = 0, sum = 0 ;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(j != i){
                sum += arr[j];
            }
        }

        //the first sum
        if(i === 0){
            min =  sum;
            max = sum;
        }

        //check for minimum or maximum
        if(sum < min){
            min = sum;
        }
        else if (sum > max){
            max = sum;
        }

        sum = 0;
    }

    //print out
    console.log(min+"  "+max)
}

miniMaxSum([1,2,3,4,5,6])