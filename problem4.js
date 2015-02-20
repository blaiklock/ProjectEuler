// Problem 4 from Project Euler
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two
// 2-digit numbers is 9009 = 91 x 99.
//
// Find the largest palindrome made from the product
// of two 3-digit numbers.
//
// Solution: 906609

var isPalindrome = function (number) {
    var numAsString = number.toString();
    var numLength = numAsString.length;
    // Only look at even length numbers
    if (numLength % 2 !== 0) {
        return false;
    }
    else {
        var firstHalf = numAsString.slice(0, numLength/2);
        var secondHalf = numAsString.slice(numLength/2).split('').reverse().join('');
        return firstHalf === secondHalf;
        }
    }

var max_num = 1000;
var product;
var max = 0;

for (var i = 1; i < max_num; i++) {
    for (var j = 1; j < max_num; j++) {
        product = i * j;
        if (product > max) {
            if (isPalindrome(product)) {
                max = product;
                var nums = [i, j];
            }
        }
    }
}
console.log("Solution:", 906609);
console.log(max);
console.log(nums);
