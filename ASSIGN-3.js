// Assignment 3: Callback-Based Utility System
// ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

// Problem statement: Build a small utility program that performs operations on arrays and strings using callback functions.
// ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯


// 1. Create a function processArray(arr, callback) that passes each array element to a callback and collects the returned values in a new array.


        // function processArray(arr, callback) {
        //     let result = [];
        
        //     for (let i = 0; i < arr.length; i++) {
        //         result.push(callback(arr[i]));
        //     }
        
        //     return result;
        // }
        
        // let numbers = [1, 2, 3, 4];
        
        // console.log(processArray(numbers, function (n) {
        //     return n * 2;
        // }));
        


// 2. Use processArray() to square every number in an array.


        // function processArray(arr, callback) {
        //     let result = [];

        //     for (let i = 0; i < arr.length; i++) {
        //         result.push(callback(arr[i]));
        //     }

        //     return result;
        // }

        // let numbers = [1, 2, 3, 4, 5];

        // let square = processArray(numbers, function (n) {
        //     return n * n;
        // });

        // console.log(square);


// 3. Use processArray() to return only even numbers. Define a suitable callback and modify the main function if necessary to support filtering.


        // function processArray(arr, callback) {
        //     let result = [];

        //     for (let i = 0; i < arr.length; i++) {
        //         let value = callback(arr[i]);

        //         if (value !== undefined) {
        //             result.push(value);
        //         }
        //     }

        //     return result;
        // }

        // let numbers = [1, 2, 3, 4, 5, 6];

        // let evenNumbers = processArray(numbers, function (n) {
        //     if (n % 2 === 0) {
        //         return n;
        //     }
        // });

        // console.log(evenNumbers);

// 4. Create a function processString(str, callback) that passes a string to a callback.


        // function processString(str, callback) {
        //     return callback(str);
        // }

        // let result = processString("hello js", function(str) {
        //     return str;
        // });

        // console.log(result);


        // 5. Use a callback to convert a string to uppercase.

        // function processString(str, callback) {
        //     return callback(str);
        // }

        // let result = processString("hello quad", function(str) {
        //     return str.toUpperCase();
        // });

        // console.log(result);



// 6. Use a callback to count the number of words in a sentence.


        // function processString(str, callback) {
        //     return callback(str);
        // }
        
        // let result = processString("JavaScript is easy to learn", function(str) {
        //     return str.trim().split(/\s+/).length;
        // });
        
        // console.log(result);



// // 7. Create a function calculate(a, b, callback) that performs an operation based on the callback provided.


        // function calculate(a, b, callback) {
        //     return callback(a, b);
        // }

        // let result = calculate(10, 5, function(a, b) {
        //     return a + b;
        // });

        // console.log(result);

        

// 8. Use calculate() with callbacks for addition, subtraction, multiplication, and division.


        // function calculate(a, b, callback) {
        //     return callback(a, b);
        // }

        // // Addition
        // let add = calculate(10, 5, function(a, b) {
        //     return a + b;
        // });

        // // Subtraction
        // let subtract = calculate(10, 5, function(a, b) {
        //     return a - b;
        // });

        // // Multiplication
        // let multiply = calculate(10, 5, function(a, b) {
        //     return a * b;
        // });

        // // Division
        // let divide = calculate(10, 5, function(a, b) {
        //     return a / b;
        // });

        // console.log("Addition:", add);
        // console.log("Subtraction:", subtract);
        // console.log("Multiplication:", multiply);
        // console.log("Division:", divide);



// 9. Create a function findElement(arr, callback) that returns the first element satisfying a condition, or undefined if no element matches.


        // function findElement(arr, callback) {
        //     for (let i = 0; i < arr.length; i++) {
        //         if (callback(arr[i])) {
        //             return arr[i];
        //         }
        //     }

        //     return undefined;
        // }

        // let numbers = [1, 3, 5, 8, 9, 10];

        // let result = findElement(numbers, function(n) {
        //     return n % 2 === 0;
        // });

        // console.log(result);



// ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯