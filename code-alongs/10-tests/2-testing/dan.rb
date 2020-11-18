#talk to dan

def shouting? (input)
    input == input.upcase
end

input = gets.chomp

if shouting?(input)
    puts "chill out"
elsif input.end_with?("?")
    puts "sure"
else
    puts "blah"
end

# its an assertion
# where the actual === the expected
if shouting? ("hi") == false 
    puts "yay it works"
end 