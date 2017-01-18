/*jshint esversion: 6 */

function solve(args){
    let heights = [53,20, 1, 30, 2, 40, 3, 3, 10, 1]
    let i  , len , result= 0 ;
    for(i=1, len = heights.length-1; i <len ; i +=1 )
    {
        if(heights[i]>heights[i-1] && heights[i]>heights[i+1])
        {
            heights[i] = -20;
            i++;
        }
    }
    for(i=1,len = heights.length-1; i <len ; i +=1)
    {
        if(heights[i-1]== -20 && heights[i+1]==-20)
        {
            result += heights[i];
        }
    }
     console.log(result);
}
solve(args)

