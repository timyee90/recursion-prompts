/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n < 0){
		return null;
	}
	if (n == 0 || n == 1){
		return 1;
	}
	return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	// edge case - empty array;
	if (array.length === 0){
		return 0;
	}
	// base case
	if (array.length === 1){
		return array[0];
	}
	// recursive case
	return array[array.length - 1] + sum(array.slice(0, array.length - 1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	// edge case - empty array;
	if(array.length === 0){
		return 0;
	}
	// base case
	if(array.length === 1 && !Array.isArray(array[0])){
		return array[0];
	}
	// keep calling arraySum until the no longer an array
	if(array.length === 1 && Array.isArray(array[0])){
		return arraySum(array[0]);
	}
	// ---- Recursive Case ----
	// If current element is not an array, return current element +
	// the preceeding array elements,
	// Otherwise return the arraySum of the current element +
	// the arraySum of the preceeding array elements
	// -------------------------
	if(!Array.isArray(array[array.length - 1])){
		return array[array.length - 1] + arraySum(array.slice(0, array.length - 1));
	}else{
		return arraySum(array[array.length - 1]) + arraySum(array.slice(0, array.length - 1));
	}
};

// 4. Check if a number is even.
var isEven = function(n) {
    n = Math.abs(n)

    // base cases
    if(n === 1){
        return false;
    }else if(n === 0){
        return true;
    }
    // recursive case
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    // base case
    if(n === 0 || n === 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }else if(n === -2){
        return -1;
    }
    // recursive case
    if (n >= 1){
        return (n - 1) + sumBelow(n - 1);
    }else if(n <= -1){
        return (n + 1) + sumBelow(n + 1);
    }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
// var range = function(startNum, endNum) {    
    let result;
    // base case
    if( (x === y - 1) || (x === y + 1) || (x === y) ){
        return [];
    }
    // recursive case
    if(x > y){
        result = range(x, y + 1);
        result.push(y + 1);
    }else{
        result = range(x, y - 1);
        result.push(y - 1);
    }
    return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    // edge case
    if(exp === 0){
        return 1;
    }
    // base case
    if(exp === 2){
        return base ** 2;
    }else if(exp === 1){
        return base;
    }else if(exp === -1){
        return base ** -1;
    }
    // recursive case
    if(exp % 2 === 0){ // even
        if(exp > 2){
            return exponent(base, exp / 2) * exponent(base, exp / 2);
        }else{
            return parseFloat((exponent(base, exp / 2) * exponent(base, exp / 2)).toFixed(12));
        }
    }else{ // odd
        if(exp > 1){
            return base * exponent(base, exp - 1);
        }else{
            return parseFloat((base ** -1) * exponent(base, exp + 1).toFixed(12));
        }
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if(n === 1){
        return true;
    }
    if(n === 2){
        return true;
    }
    if(n % 2 === 1 || n === 0){
        return false;
    }
    return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    // base case
    if(string.length === 1){
        return string[0];
    }
    // recursive case
    return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.toLowerCase().split(' ').join('');

    // base case
    if(string.length <= 1){
        return true;
    }
    let base = false;
    if(string[0] === string[string.length - 1]){
        base = true;
    }else{
        return base;
    }
    // recursive case
    return base && palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    let isNeg = false;
    if(x < 0){
        isNeg = true;
        x = -x;
    }
    if(y < 0){
        y = -y;
    }
    if(y === 0){
        return NaN;
    }
    if(x === 0){
        return 0;
    }
    if(x < y && !isNeg){
        return x;
    }else if(x < y && isNeg){
        return -x;
    }
    if(!isNeg){
        return modulo(x - y, y);
    }else{
        return -modulo(x - y, y);
    }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    let isReversed = false;
    if(x === 0 || y === 0){
        return 0;
    }
    if(x < 0 && y < 0){
        x = -x;
        y = -y;
    }
    if(x < 0 && y > 0){
        x = -x;
        isReversed = true;
    }
    if(x > 0 && y < 0){
        y = -y;
        isReversed = true;
    }
    if(y === 1){
        return x;
    }
    if(!isReversed){
        return x + multiply(x, y - 1);
    }else{
        return -x - multiply(x, y - 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    if(y === 0){
        return NaN;
    }
    if(x === 0 || y > x || (x < 0 && y < 0 && x > y) ){
        return 0;
    }
    if(y === x){
        return 1;
    }
    return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if( (x <= 0) || (y <= 0) ){
        return null;
    }
    var result = 1;
    var limit = Math.max(x, y);
    for(let i=1; i<=limit; i++){
        if( (y % i === 0) && (x % i === 0) ){
            result = i;
        }
    }
    return result;
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    let len1 = str1.length - 1;
    let len2 = str2.length - 1;
    //base case
    if(str1.length === 0 && str2.length === 0){
        return true;
    }
    if(str1.length === 1){
        return (str1[0] === str2[0]);
    }
    // recursive case
    if( compareStr(str1.slice(0, len1), str2.slice(0, len2)) && (str1[len1] === str2[len2]) ){
        return true;
    }
    return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    // base case
    if(str.length === 0){
        return [];
    }
    // recursive case
    let result = createArray(str.slice(0, str.length - 1));
    result.push(str[str.length - 1]);
    return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    // base case
    if(array.length === 0){
        return [];
    }
    // recursive case
    let result = reverseArr(array.slice(0, array.length - 1));
    result.unshift(array[array.length - 1]);
    return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    // base cae
    if(length === 0){
        return [];
    }
    // recursive case
    let result = buildList(value, length - 1);
    result.push(value);
    return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
    // base case
    if(n === 0){
        return [];
    }
    // recursive case
    let result = fizzBuzz(n - 1)
    let len = result.length + 1;
    if( len % 3 === 0 && len % 5 === 0 ){
        result.push('FizzBuzz');
    }else if( len % 3 === 0 ){
        result.push('Fizz');
    }else if( len % 5 === 0 ){
        result.push('Buzz');
    }else{
        result.push(len.toString());
    }
    return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    // base case
    if(array.length === 0){
        return 0;
    }
    let last = array.length - 1;
    // recursive case
    return (array[last] === value) || (isNaN(array[last]) && isNaN(value)) ? 
        1 + countOccurrence(array.slice(0, last), value) :
        0 + countOccurrence(array.slice(0, last), value); 
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    // base case
    if(array.length === 0){
        return [];
    }
    // recursive case
    let result = rMap(array.slice(0, array.length - 1), callback);
    result.push(callback(array[array.length - 1]));
    return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    let count = 0;

    // loop through all properties
    for(let property in obj){
        // if value is an object, call countKeysInObj; update count
        if(typeof obj[property] === 'object'){
            count += countKeysInObj(obj[property], key);
        }
        // if property = key, increment count
        if(property === key){
            count++;
        }
    }
    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    let count = 0;

    // loop through all key
    for(let key in obj){
        // if value is an object, call countValuesInObj; update count
        if(typeof obj[key] === 'object'){
            count += countValuesInObj(obj[key], value);
        }
        // if value = key, increment count
        if(obj[key] === value){
            count++;
        }
    }
    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    // iterate over object key: value pairs
    for(let key in obj){
        // mutate obj property
        if(key === oldKey){
            obj[newKey] = obj[oldKey];
            delete obj[key];
        }
        // if value is an object, call replaceKeysInObj; set property to returned object
        if(typeof obj[key] === 'object'){
            obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
        }
    }
    // return mutated obj
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
     // base case
    if( n <= 0){
        return null;
    }
    if( n === 1){
        return [0, 1];
    }
    // recursive case
    let result = fibonacci(n - 1);
    result.push(result[n - 2] + result[n - 1]);
    return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n < 0){
        return null;
    }
    if(n === 0 || n === 1){
        return n;
    }
    // recursive case
    return nthFibo(n - 2) + nthFibo(n - 1);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    // base case
    if(array.length === 0){
        return [];
    }
    // recursive case
    let result = capitalizeWords(array.slice(0, array.length - 1));
    result.push(array[array.length - 1].toUpperCase());
    return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    // base case
    if(array.length === 0){
        return [];
    }
    // recursive case
    let result = capitalizeFirst(array.slice(0, array.length -1));
    let word = array[array.length - 1];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(word);
    return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    let count = 0;

    // iterate over object
    for(let key in obj){
        // if value is an object, call nestedEvenSum, update count
        if(typeof obj[key] === 'object'){
            count += nestedEvenSum(obj[key]);
        }
        // if value is even, update count
        if(obj[key] % 2 === 0){
            count += obj[key];
        }
    }
    return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    let result = [];

    // recursive case
    for(let i=0; i<array.length; i++){
        // if i-th element of array is an array, call flatten
        if(Array.isArray(array[i])){
            Array.prototype.push.apply(result, flatten(array[i]));
        }else{
            result.push(array[i]);
        }
    }
    return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
    // base case
    if(str.length === 0){
        return {};
    }
    // recursive case - obj is unused
    let result = letterTally(str.slice(0, -1), obj);
    let current = str[str.length - 1];
    result[current] = result[current] ? result[current] += 1 : 1;
    return result;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    // base case
    if(list.length === 0){
        return [];
    }
    // recursive case
    let result = compress(list.slice(0, -1));
    // result does not contain current element
    if(result[result.length - 1] !== list[list.length - 1]){
        result.push(list[list.length - 1]);
    }
    return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    // base case
    if(array.length === 1){
        array[array.length - 1].push(aug);
        return;
    }
    // recursive case
    augmentElements(array.slice(0, -1), aug);
    array[array.length - 1].push(aug);
    return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    // base case
    if(array.length === 0){
        return [];
    }
    // recursive case
    let result = minimizeZeroes(array.slice(0, -1));
    // if last value was not a zero, push
    if( (result[result.length - 1] !== array[array.length - 1]) || (result[result.length - 1] !== 0) ){
        result.push(array[array.length - 1]);
    }
    return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    // base case
    if(array.length === 0){
        return []
    }
    // recursive case
    let result = alternateSign(array.slice(0, -1));
    let current = array[array.length - 1];
    if( (result.length % 2 === 0 && current < 0) || (result.length % 2 === 1 && current > 0) ){
        result.push(current * -1);
    }else{
        result.push(current);
    }
    return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    let lookup = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 
                  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'}
    // base case
    let words = str.split(' ')
    if(str === ''){
        return '';
    }
    // recursive case
    let result = numToText(words.slice(0, -1).join(' '));
    if(isNaN(parseInt(words[words.length - 1]))){
        result += ' ' + words[words.length - 1];
    }else{
        result += ' ' + lookup[parseInt(words[words.length - 1])]
    }
    result = result.trim();
    return result;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    // return document.getElementsByTagName(tag).length;
    let result = 0;
    obj = document.body.childNodes;

    // traverse the nodeList
    if(node !== undefined){
        // increment by 1 if nodeName equals tag
        result += (node.nodeName.toLowerCase() === tag) ? 1 : 0;

        node = node.childNodes;
        // traverse childNodes
        for(let i=0; i<node.length; i++){
            if(node[i].nodeName.toLowerCase() === tag){
                result ++;
            }else if(node[i].children.length > 0){
                // recursive call
                result += tagCount(tag, node[i]);
            }
        }
    }else{
        // traverse the childNodes
        for(let i=0; i<obj.length; i++){
            // recursively call the tagCount
            result += tagCount(tag, obj[i]);
        }
    }
    return result;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
    // divde the array into two halves
    let upperIndex = Math.floor((array.length - 1) / 2) + 1;
    let lowerIndex = Math.floor((array.length - 1) / 2);

    // base case - if found, return target index
    if(target === array[upperIndex]){
        return upperIndex;
    }else if(target === array[lowerIndex]){
        return lowerIndex;
    }

    // target out of bounds
    if( (target > array[array.length -1]) || (target < array[0]) ){
        return null;
    }

    if(target > array[upperIndex]){
        array = array.slice(upperIndex, array.length);
        let result = binarySearch(array, target);
        return (result === null) ? null : upperIndex + result;
    }else if(target < array[upperIndex]){
        array = array.slice(0, lowerIndex);
        return binarySearch(array, target);
    }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
    // divide
    // if array length >= 2 divide (call itself)

    // merge

    // if array length <= 2, swap

    // else compare the smallest values

};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
    // create a result object/array
    let result = Array.isArray(input) ? [] : {};
    // loop over object key
    for(let key in input){
        // if input value is an object, call clone
        if(typeof input[key] === 'object'){
            result[key] = clone(input[key]);
        }else{
            result[key] = input[key];
        }
    }
    return result;
};
