/**
 * 
 *  problem: write a program that prints out staircase with the desired height of the stair case give.
 *           Consider a staircase of size n=4;
 *                              #
 *                            # #
 *                          # # #
 *                        # # # #
 *          staircase of size 4 should look like the output of the above.
 */

function staircase(n) {
    let stair = " ", empty = "";

    //loop for printing out staircase
    for(let i = 1; i <= n; i++){
        console.log("#".repeat(i).padStart(n));
    }
}

staircase(4);