print "Check if something is a palindrome? "
string = gets.chomp.gsub(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)| |“|”|’|/, "").downcase

puts string

if string == string.reverse
    puts "Yay! a palindrome!"
else 
    puts "Nope, not a palindrome"
end


test_case = "A dog, a plan, a canal: pagoda."
test_case = "A dog! A panic in a pagoda!"
test_case = "A dog! Ax panic in a pagoda!"
test_case = "Animal loots foliated detail of stool lamina."
test_case = 'Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.'