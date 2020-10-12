# Write a method switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.
require "pry" 

# switch_up("Switch caSe FoR eVery letter") --> // "sWITCH CAsE fOr EvERY LETTER"


def switch_up (sentance) 
    new_arr = [] 
    sentance.each_char do |letter| 
        if letter == letter.downcase
            new_arr.push(letter.upcase) 
        else 
            new_arr.push(letter.downcase) 
        end
    end
    new_arr.join
end

def switch_up2 (sentance) 
    sentance.swapcase
end

puts "switch_up"
puts switch_up("Switch caSe FoR eVery letter")

puts "sitch_up2"
puts switch_up2("Switch caSe FoR eVery letter")

# binding.pry