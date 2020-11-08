#activerecord is the name of a library
require "pg"
require "active_record"
require "pry"

puts "yeah"

settings = { 
    adapter: "postgresql",
    database: "todo_app"
}

ActiveRecord::Base.establish_connection(settings)

# object template
# thing that maps to a table
# this class name Todo maps to table name todos
# naming is important, class name must match table name
# convention over configuration
class Todo < ActiveRecord::Base
    
end

binding.pry