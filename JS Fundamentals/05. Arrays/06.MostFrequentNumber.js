function mostFrequentNumber(args) {
    let len = +args.shift(),
        numbers = args.map(Number),
        frequentNum,
        maxCount = 0;

    for (let i = 0; i < len; i += 1) {
        let currNum = numbers[i],
            count = 1;

        for (let j = i + 1; j < len; j += 1) {
            if (currNum === numbers[j]) {
                count += 1;
                if (count > maxCount) {
                    maxCount = count;
                    frequentNum = currNum;
                }
            }
        }
    }
    return frequentNum + ' (' + maxCount + ' times)';
}

console.log(mostFrequentNumber(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']));

/*
Write a program that finds the most frequent number in an array of N elements.

Input

On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Output

Print the most frequent number and how many time it is repeated
Output should be REPEATING_NUMBER (REPEATED_TIMES times)
Constraints

1 <= N <= 1024
0 <= each number in the array <= 10000
There will be only one most frequent number
Time limit: 0.1s
Memory limit: 16MB
Sample tests

Input
['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']

Output
4 (5 times)

*/