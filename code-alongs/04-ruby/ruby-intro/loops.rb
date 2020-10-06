require "pry" #binding.pry --------- debugger
# While loop
# while condition
#     blah blah
# end

#guessing game
# Generate a random number betwen 1 - 10 
# allow the usesr to guess until they guess correctly
#he ou're doing ok if they guessed finally


secret_num = rand(1..10)
puts("Guess a random number between 1 and 10")
guess = gets().chomp()
puts(guess)
p(guess)
puts(guess)

binding.pry #will pause here

while guess.to_i != secret_num 
    if guess.to_i > secret_num
        puts("Your guess was too high, guess again")
    else 
        puts("Your guess was too low, guess again")
    end
    guess = gets()
end

puts("Well done you guessed correctly")
