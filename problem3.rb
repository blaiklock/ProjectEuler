# Problem 3 from Project Euler
# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143?
#
# Solution: 6857

input = 600851475143 

def isPrime(n)
  (2...n).each {|i| return false if n % i == 0}
  return true
end

factors = []
# do not need to go farther than sqrt(n), if n is divisible by p,
# then n = p x q and if q were smaller than p, q would have already
(2...Math.sqrt(input)).each do |i|
# been detected.
  # check if input is divisible by i
  # if not, no point in checking if i is prime
  factors << i if (input % i == 0) and (isPrime(i))
end

puts "Solution:", 6857
puts factors[-1]
