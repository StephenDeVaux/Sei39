     
require 'sinatra'
require "pg"
require "active_record"

settings = { 
    adapter: "postgresql",
    database: "todo_app"
}

ActiveRecord::Base.establish_connection(settings)

class Todo < ActiveRecord::Base
end


get '/api/todos' do
  todos = Todo.all
  content_type :json
  todos.to_json
end







    


