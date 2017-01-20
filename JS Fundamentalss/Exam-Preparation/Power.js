/*jshint esversion: 6 */

let args = [ '5 1' , '9 0 2 4 1' ];

function solve(args){
    var nk = args[0].split(' ').map(Number),
        numbers = args[1].split(' ').map(Number),
        result = 0;
//•	each 0 - with the absolute difference of its neighboring numbers
//•	all other even numbers - with the maximum of its neighboring numbers
//•	each 1 - with the sum of its neighboring numbers
//•	all other odd numbers - with the minimum of its neighboring numbers


    function transform(num, left, right){
        if(num === 0)
        {
            return Math.abs(left - right);
        } else if(num % 2 === 0){
            return Math.max(left, right);
        } else if(num === 1){
            return left + right;
        }else {
            return Math.min(left, right);
        }
    }

    let lastIndex = numbers.length

    for(let i = 0; i < nk[1]; i += 1){
        let currentTransformation = [];        

        for(let j = 0; j < lastIndex; j += 1){
            let nextValue;

            if(j === 0){
                nextValue = transform(numbers[j], numbers[lastIndex -1], numbers[1]);
            }else if(j === numbers.length -1){
                nextValue = transform(numbers[j], numbers[j-1], numbers[0]);
            }else{
                nextValue = transform(numbers[j], numbers[j-1], numbers[j + 1]);
            } 
            currentTransformation[j] = (nextValue);
        }
        numbers = currentTransformation;
    }
    for(let num of numbers){
        result += num;
    }
    console.log(result);


} 
solve(args);
