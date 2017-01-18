/*jshint esversion: 6 */

let args = [
    "5 1 7 6 3 6 4 2 3 8"
]
function solve(args) {
    let heights = args[0].split(" ").map(Number);

    let i, len = heights.length, result = 0, temp = 0;

    for (i = 0; i < len; i += 1) {


        if (i == 0 && heights[i] > heights[i + 1]) {
            temp += 1;
            do {
                i += 1;
                temp += 1;

            } while (!(heights[i] > heights[i + 1] && heights[i] > heights[i - 1])&& !(i >= (heights.length - 1)));
            result = temp;
            
            temp = 0;
            
        }


         if (heights[i] > heights[i + 1] && heights[i] > heights[i - 1]) {

            temp += 1;
            do {

                i += 1;
                temp += 1;
            } while (!(heights[i] > heights[i + 1] && heights[i] > heights[i - 1]) && !(i >= (heights.length - 1)));
        
            i-=1;
            if (temp > result) {
                
                result = temp;
                temp = 0;
            }
            else {
                temp = 0;
            }
        }
        else {
            
            continue;
        }

    }
    
        result -=1;
    

    console.log(result);
}
solve(args);