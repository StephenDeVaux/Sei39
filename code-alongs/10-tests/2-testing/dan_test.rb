require_relative 'dan.rb'

#nan testing framework
def test(message, actual, expected) 
    if actual == expected
        puts "#{message} it works"
    else
        puts "#{message} fail"
    end
end

#test case
test ("shouting", shouting?("YO"), true)
test ("shouting", shouting?("yo"), false)