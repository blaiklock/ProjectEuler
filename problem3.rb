# Problem 3 from Project Euler
# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143?
#
# Solution: 6857

input = 600851475143

def isPrime(n)
  for i in 2...n
    if n % i == 0
      return false
    end
  end
  return true
end

max = 0
factors = []

# do not need to go farther than sqrt(n), if n is divisible by p,
# then n = p x q and if q were smaller than p, q would have already
# been detected.
for i in 1..Math.sqrt(input)
  if input % i == 0
    if isPrime(i)
      factors.push(i)
      if i > max
        max = i
      end
    end
  end
end

puts isPrime(13)

puts "Solution:", 6857
puts max
puts factors
