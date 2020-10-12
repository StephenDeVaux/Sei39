require "pry"

# define method
# implicit return
# methods always return something, and will be the last expression
# you can put the return back in if you like it

def test_method message
    puts "Hi there"
    puts message
    2
    "ha"
end


def palindrome? word
    string = word.gsub(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)| |“|”|’|/, "").downcase

    string == string.reverse #this is an expression returning a boolean
end


binding.pry
# check_palindrome