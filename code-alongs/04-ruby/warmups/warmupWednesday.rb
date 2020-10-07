# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.

# He answers 'Sure.' if you ask him a question.
# He answers 'Whatever.' if you tell him something.
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
# He says 'Fine. Be that way!' if you address him without actually saying anything (empty spaces).
# Write code in ruby so that you can have an interactive conversation with Daniel.

puts "Welcome to Daniel the lackadaisical teenegar. Have a nice convo with him!"

loop do 
    #Say something to dan
    speak_to_dan = gets.chomp.strip

    if speak_to_dan == "bye"
        break
    elsif speak_to_dan[-1] == "?"
        puts "Sure."
    elsif speak_to_dan.length == 0
        puts "fine. Be that way!"
    elsif speak_to_dan == speak_to_dan.upcase
        puts "who, chill out!"
    else 
        puts "Whatever"
    end
end

puts "whatever, bye."