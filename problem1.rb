# Problem 1 from Project Euler
# If we list all the natural numbers below 10 that are multiples of
# 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.
#
# Solution: 233168

input = 1000
sum = 0

for i in 0...input do
	if i % 3 == 0 or i % 5 == 0
    sum += i
	end
end

puts "Solution:", 233168
puts sum