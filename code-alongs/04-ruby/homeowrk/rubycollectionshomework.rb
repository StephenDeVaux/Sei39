require "pry"
# ### Arrays
# Starting with the following array...
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in `planeteers`.
puts "1. Second value"
value_2 = planeteers[1]
puts value_2

# Add "Heart" to the end of `planeteers`.
puts "\n2. Planeteers"
planeteers.push "Heart"
puts "#{planeteers}"

# Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`.
puts "\n3. Heroes"
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers + rangers
puts "#{heroes}"

# Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
puts "\n4. Alphabetical order"
heroes = heroes.sort
puts "#{heroes}"

# Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
puts "\n5. Contents shuffled order"
heroes = heroes.shuffle
puts "#{heroes}"

# #### Bonus
# Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).
puts "\n6. A random element from heroes"
puts heroes.sample

# print out all elements in `heroes` that begin with "B".
puts "\n7. All elements in heroes with a B"
filtered_b = heroes.select { |word| word[0] == "B" }
puts "#{filtered_b}"

# ### Hashes
# Initialize a hash called `ninja_turtle` with the properties `name`, `weapon` and `radical`. It should have values of "Michelangelo", "Nunchuks" and `true` respectively.
ninja_turtle = {
    name: "Michelangelo",
    weapon: "Nunchucks", 
    radical: true, 
}
puts "\n8. Ninja turtle"
puts "#{ninja_turtle}"

# Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like.
puts "\n9. Add age"
ninja_turtle[:age] = 59
puts "#{ninja_turtle}"

# Remove the `radical` key-value pair from `ninja_turtle`.
puts "\n10. remove radical"
ninja_turtle.delete(:radical)
puts "#{ninja_turtle}"

# Add a key `pizza_toppings` to `ninja_turtle`. Set it to an array of strings (e.g., `["cheese", "pepperoni", "peppers"]`).
puts "\n11. Add pizza toppings"
ninja_turtle[:pizza_toppings] = %w| cheese pepperoni peppers |
puts "#{ninja_turtle}"

# Access the first element of `pizza_toppings`.
puts "\n12. Acces first pizza topping"
puts "#{ninja_turtle[:pizza_toppings][0]}"

# Produce an array containing all of `ninja_turtle`'s keys using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).
puts "\n13. All keys from ninja"
all_keys = ninja_turtle.keys
puts "#{all_keys}"

# #### Bonus
# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).
puts "\n14. BONUS!! Print out each key-value pair"
ninja_turtle.each_key { |key| puts "#{key} is equal to #{ninja_turtle[key]}" }

# binding.pry