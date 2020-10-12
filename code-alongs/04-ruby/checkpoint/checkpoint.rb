require "pry"
puts "Checkpoint"

# # Question 1 (1pt)
# Define a method called `offer_rose`, which has one parameter named `person` (String).
# When called for example `offer_rose("batman")` the method should **return** the string:
# "Would you take this rose, batman, in exchange for giving an old beggar woman shelter from the bitter cold?"
puts "Quetion 1."
def offer_rose person
    "Would you take this rose, #{person}, in exchange for giving an old beggar woman shelter from the bitter cold?"
end
puts offer_rose "Robin"

# # Question 2 (2pt)
# Assume the following hash...
town = {
  residents: ["Maurice", "Belle", "Gaston"],
  castle: {
    num_rooms: 47,
    residents: [
      {
        name: "Robby Benson",
        year_of_birth: 1956
      }
    ],
    guests: ['birds']
  }
}
# Programmatically using Ruby...
# - print the number of rooms in the castle by accessing the hash
# - Add "Belle" to the **beginning** of the `guests` array
# - print the year of birth for robby by accessing the hash
# - Add a new key and value pair to the `castle` hash (key `:cook` value `"Mrs Potts"`)
puts "\nQuetion 2."
puts "Number of rooms = #{town[:castle][:num_rooms]}"
town[:castle][:guests].unshift("Belle")
puts "Guest array = #{town[:castle][:guests]}"
puts "Robby was born in #{town[:castle][:residents][0][:year_of_birth]}"
town[:castle][:cook] = "Mrs Potss"
puts "Castle now has a cook \n#{town[:castle]}"

# # Question 3 (1pt)
# Assume you have an array of strings representing friends' names...
friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]
# Using a loop and string interpolation, print each string in `friends` to the Terminal...like below
# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts
puts "\nQuestion 3."
#Using a while loop as you specified loop, otherwise would have used .each
counter = 0
while counter < friends.length 
    puts "Belle is friends with #{friends[counter]}"
    counter += 1
end

# # Question 4 (2pt)
# Assume the following array of hashes:
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
# Use `.each` to iterate over the `lost_boys` array to calculate to the sum of all lost boys age.
# print the sum age in the terminal
puts "\nQuestion 4."
sum_of_age = 0
lost_boys.each do |boy|
    sum_of_age += boy[:age].to_i
end
puts "The sum of the lost boys age is #{sum_of_age}"


# # Question 5 (3pt)
# Assume the following array:
children = ['Wendy', 'John', 'Michael']
# Use the existing `children` array to create a new array named `darling_children` 
# with each name transformed with a number appended to the front and ` Darling` appended to the end of each name. 

# The new `darling_children` array should contain the following
# ['1 Wendy Darling', '2 John Darling', '3 Michael Darling']
puts "\nQuestion 5."
darling_children = []
children.each_index do |index|
    darling_children.push "#{index + 1} #{children[index]} Darling"
end
puts "Darling_children\n#{darling_children}"


# # Question 6 (2pt)
# Assume the following
names = ["Belle", "Cogsworth", "Lumière", "Mrs. Potts"]
# create a new array named `short_names` by selecting names with less than 8 characters long from the above names array. Mrs. Potts name is not Potts its "Mrs. Potts".
puts "\nQuesiton6."
short_array = names.select { |name| name.length < 8 }
puts "Short names\n#{short_array}"


# # Question 7 (3pt)
# Write a function `letter_reverse` that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.
# letter_reverse("Now I know what a TV dinner feels like")
# # => "woN I wonk tahw a VT rennid sleef ekil"
# letter_reverse("Put Hans back on the line")
# # => "tuP snaH kcab no eht enil"
puts "\nQuestion 7."
def letter_reverse sentance
    sentance_array = sentance.split(" ")
    sentance_array.each { |word| word.reverse! }
end
puts "#{letter_reverse("Now I know what a TV dinner feels like")}"
puts "#{letter_reverse("Put Hans back on the line")}"

# # Question 8 (3pt) 
# Define a `scream` method that accepts a parameter and when called should as return a string as per the examples below"
# ```ruby
# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(7) #=> "lololololololol"
# ```
puts "\nQuestion 8"
def scream num 
    if num == 0
        return "crickets"
    elsif num > 0
        return "l#{"ol"*num}"
    end
end
puts "#{scream(0)}"
puts "#{scream(1)}"
puts "#{scream(2)}"
puts "#{scream(3)}"
puts "#{scream(7)}"

# binding.pry