# 5.times do
#     puts("something yeah")
# end

# // Write a Deaf Grandma program using prompts, alerts and a loop.

# // Whatever you say to grandma (whatever you type in), she should respond with

# // HUH?! SPEAK UP, SONNY!
# // unless you shout it (type in all capitals).

# // If you shout, she can hear you (or at least she thinks so) and yells back

# // NO, NOT SINCE 1938!
# // You can't stop talking to grandma until you shout BYE.


#first lets say hi to grandma
puts('Say Hi to grandma!')
# question = gets().chomp()
question = ""
#Say something to grandma
while question != "BYE" 
    question = gets().chomp()
    if question == "BYE"
        puts("OKAY, BYE THEN")
    elsif question == question.upcase
        puts("NO, NOT SINCE 1938!")
    else 
        puts("HUH?! SPEAK UP, SONNY!")
    end
end
#check if she hears it
#If she does she says not, since 1938
#if she doesn, tshe cant hear