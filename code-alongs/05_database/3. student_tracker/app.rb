require 'pg'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

db = PG.connect(dbname: 'school')
# db.exec("SELECT * FROM students;")

get '/' do
    student_list = db.exec('SELECT * FROM students;')
    erb :index, locals: {students: student_list}
end

get '/add' do
    db.exec("INSERT INTO students(name, score) VALUES ('#{params['name']}', #{params['score']});")

    student_list = db.exec('SELECT * FROM students;')
    erb :index, locals: {students: student_list}
end

get '/delete' do
    db.exec("DELETE FROM students WHERE id = '#{params['student_id']}';")

    student_list = db.exec('SELECT * FROM students;')
    erb :index, locals: {students: student_list}
end

# puts "main menu \n========= \n1) add new student \n2) list all students \n3) quit \n\n"
# print 'enter an option: '

# loop do
#     option = gets.chomp
#     if option == '1'
#         print 'Name of the new student: '
#         new_student = gets.chomp
#     db.exec("INSERT INTO students(name, score) VALUES ('#{new_student}', 200);")
#   elsif option == '2'
#     puts 'List of students:'
#     student_list = db.exec('SELECT * FROM students;')
#     student_list.each { |student| puts "#{student["id"]}. score - #{student["score"]} - #{student["name"]} " }
#   elsif option == '3'
#     puts 'Okay bye bye'
#     break
#   else
#     puts 'Select valid option'
#   end
#   puts "\nmain menu \n========= \n1) add new student \n2) list all students \n3) quit \n\n"
#   print 'enter an option: '
# end

# binding.pry

