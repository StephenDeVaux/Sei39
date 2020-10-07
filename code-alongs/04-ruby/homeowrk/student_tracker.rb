# student tracker

# write a command line interface program for adding and listing students. 
# Running the student tracker program users will be greeted with the main menu with 3 options.

# ```
# main menu
# =========
# 1) add new student
# 2) list all students
# 3) quit

# enter an option: 
# ```

# - entering 3 quits the program
# - entering 2 will list all students and then shows the main menu again
# - entering 1 will prompt for a new student name and then shows the main menu again

puts "main menu \n========= \n1) add new student \n2) list all students \n3) quit \n\n"
print "enter an option: "
student_list = [] 

loop do 
    option = gets.chomp
    if option == "1"
        print "Name of the new student: "
        new_student = gets.chomp
        student_list.push new_student
        student_list = student_list.sort
    elsif option == "2"
        puts "List of students:"
        student_list.each_index {|x| puts "#{x + 1}. #{student_list[x]}"}
    elsif option == "3" 
        puts "Okay bye bye"
        break
    else 
        puts "Select valid option"
    end
    puts "\nmain menu \n========= \n1) add new student \n2) list all students \n3) quit \n\n"
    print "enter an option: "
end
