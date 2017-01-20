/*jshint esversion: 6 */

let heights = [53, 20 ,1, 30, 2, 40, 3, 10, 1]

function solve(args){
   
    let i  , len , result= 0 ;
    for(i=1, len = args.length-1; i <len ; i +=1 )
    {
        if(args[i]>args[i-1] && args[i]>args[i+1])
        {
            args[i] = -20;
            i++;
        }
    }
    for(i=1,len = args.length-1; i <len ; i +=1)
    {
        if(args[i-1]== -20 && args[i+1]==-20)
        {
            result += args[i];
        }
    }
     console.log(result);
}
solve(heights);