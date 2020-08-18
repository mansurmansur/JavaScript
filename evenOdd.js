/**
 *  this program has a function which takes a parameter as inte
 */

 function evenOdd(num){
     let result;
    if (num%2==0) {
        result = "Even";
    } else{
        result = "odd";
    }

    return result;
 }


 //invoke
 console.log(evenOdd(4))