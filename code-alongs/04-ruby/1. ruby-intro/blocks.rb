5.times do |counter|
    puts "hello"
    puts "Counter = #{counter}"
end


5.upto 10 do |n|
    puts "#{n} not sure" 
end

loop do 
    puts "type bye to exit loop"
    steve = gets.chomp
    if steve == "bye"
puts "Thanks, k, bye"
        break
    end
end


letters = ['a','b','c','d']

letters.each do |letter|
    puts letter
end

a_string = "a dsf ad4f a2345df ad5f adf45".split(" ")

puts a_string