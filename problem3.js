// Problem 3 from Project Euler
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143?
//
// Solution: 6857

var input = 600851475143;

var isPrime = function(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

var max = 0;
var factors = [];

// do not need to go farther than sqrt(n), if n is divisible by p,
// then n = p x q and if q were smaller than p, q would have already
// been detected.
for (var i = 0; i < Math.pow(input, 0.5); i++) {
    if (input % i === 0) {
        if (isPrime(i)) {
            factors.push(i);
            if (i > max) {
                max = i;
            }
        }
    }
}

console.log("Solution:", 6857);
console.log(max);
console.log(factors);
