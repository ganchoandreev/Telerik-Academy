function solve(args) {
    var element = args[0];

    Array.prototype.removeElement = function (element) {
      var index = this.indexOf(element);
      while(index > -1) {
        this.splice(index, 1);
        index = this.indexOf(element);
      }

      return this;
    };

    console.log(args.removeElement(element).join('\n'));
}
solve(['1', '1', '1', '1']);
solve(['1', '2', '3', '2', '1', '2', '3', '2']);
solve(['_h/_', '^54F#', 'V', '^54F#', 'Z285', 'kv?tc`', '^54F#', '_h/_', 'Z285', '_h/_', 'kv?tc`', 'Z285', '^54F#', 'Z285', 'Z285', '_h/_', '^54F#', 'kv?tc`', 'kv?tc`', 'Z285']);

/*
Write a function that removes all elements with a given value. Attach it to the array type. Read about prototype and how to attach methods.

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
arr.remove(1); // arr = [2,4,3,4,111,3,2,'1'];
You will be given an array of strings. Remove all occurrences of the first element in the array in itself.

Input

The input will consist of an array of strings
Output

The output should be the array with some elements removed
Each string should be on a separate line
Constraints

Time limit: 0.2s
Memory limit: 16MB
Sample tests

Sample Test 1

Input

[ '1', '2', '3', '2', '1', '2', '3', '2' ]
Output

2
3
2
2
3
2
Sample Test 2

Input

[
  '_h/_',
  '^54F#',
  'V',
  '^54F#',
  'Z285',
  'kv?tc`',
  '^54F#',
  '_h/_',
  'Z285',
  '_h/_',
  'kv?tc`',
  'Z285',
  '^54F#',
  'Z285',
  'Z285',
  '_h/_',
  '^54F#',
  'kv?tc`',
  'kv?tc`',
  'Z285'
]

Output

^54F#
V
^54F#
Z285
kv?tc`
^54F#
Z285
kv?tc`
Z285
^54F#
Z285
Z285
^54F#
kv?tc`
kv?tc`
Z285
*/