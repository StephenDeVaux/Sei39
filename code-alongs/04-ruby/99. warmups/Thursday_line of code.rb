require "pry"
require 'expect'

puts "Count number of codes in a file!"

loop do 
    print "Please type in file name (or 'e' to exit) - "
    filename = gets.chomp
    if filename == "e"
        break
    end
    file_array = IO.readlines(filename)
    puts "The file contains #{file_array.length} lines"
    binding.pry
end

binding.pry