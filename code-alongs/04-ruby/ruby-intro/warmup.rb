require "pry" 
counter = 120

while counter >= 100
    puts counter
    counter -= 1
    binding.pry
end

not_sure = ["Ned", "Aden", "Matt", "Tom", "Callum", "Jian", "Felipe", "Stephen", "Sara", "Jimmy", "Linda", "Stuart", "Sam", "Naveen", "Tom", "Peter", "Bern", "Cath", "Allison"]
puts(not_sure.sample())

puts ["Ned", "Aden", "Matt", "Tom", "Callum", "Jian", "Felipe", "Stephen", "Sara", "Jimmy", "Linda", "Stuart", "Sam", "Naveen", "Tom", "Peter", "Bern", "Cath", "Allison"].sample