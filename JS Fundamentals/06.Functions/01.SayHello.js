function sayHello(args) {
    var name = args[0];
    console.log('Hello, ' + name + '!');
}

sayHello(['Peter']);

/*
Write a method that asks the user for his name and prints Hello, <name>!. Write a program to test this method.

Input

On the first line you will receive a name
Output

Print Hello, <name>!
Constraints

Time limit: 0.2s
Memory limit: 16MB
Sample tests

Input Output
Peter Hello, Peter!
*/