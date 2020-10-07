# # Guess the fruit
# You are to create a basic guess my word game. 
# Prepare a list of your favourite fruits and have the computer pick a random fruit as the secret word.
# **Prompt the user to guess the fruit until they guess correctly**.
# You should give some hints so it's easier for the user to guess.
# So when prompting the user for a guess, tell them:
# - the first letter and the last letter of the word
# - the length of the word
# For example if the secret word is banana
# > hint: it's 6 characters long. Starts with b and ends with a. guess the fruit.

favourite_fruit = ['apple', 'banana', 'apricot', 'pear', 'kiwi', 'rockmelon']

secret_fruit = favourite_fruit.sample
# puts secret_fruit
print "Guess a secret fruit - "
guess = gets.chomp

if guess != secret_fruit
    print "Wrong! It has #{secret_fruit.length} letters - "
    guess = gets.chomp

    if guess != secret_fruit
        print "Wrong again! The first letter is #{secret_fruit[0]} - "
        guess = gets.chomp
    end

    while guess != secret_fruit
        print "Wrong, guess again - "
        guess = gets.chomp
    end
end
puts "Nice, that was my fruit!"       