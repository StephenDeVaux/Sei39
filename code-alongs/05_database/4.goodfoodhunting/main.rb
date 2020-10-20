     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require_relative 'db/data_access.rb'
require 'bcrypt'
enable :sessions # global variabls named session - which is just a hash

get '/' do
  dishes = run_sql("SELECT * FROM dishes;")
  erb :index, locals: { dishes: dishes }
end

get '/dishes/new' do 
  erb :add
end

get '/dishes/:id' do
  dish = run_sql("SELECT * FROM dishes WHERE id = '#{params["id"]}';")
  erb :details, locals: { dish: dish[0]}
end

post '/dishes' do 
  dish = run_sql("INSERT INTO dishes(name, image_url) VALUES('#{params['name']}', '#{params['image_url']}');")
  redirect "/"
end

delete '/dishes' do 
  run_sql("DELETE FROM dishes WHERE id = '#{params["id"]}';")
  redirect "/"
end

get '/dishes/:id/edit' do 
  dish = run_sql("SELECT * FROM dishes WHERE id = '#{params["id"]}';")
  erb :edit, locals: { dish: dish[0] }
end

patch '/dishes/:id' do
  dish = run_sql("UPDATE dishes SET name = '#{params["name"]}', image_url = '#{params["image_url"]}' where id ='#{params["id"]}';")
  redirect "/dishes/#{params["id"]}"
end

get '/login' do
  erb :login
end

post '/login' do
  login_password = params["password"]
  login_success = false

  user = run_sql("SELECT * FROM users WHERE email = '#{params["email"]}';")

  password_object = BCrypt::Password.new(user[0]["password_digest"])

  # syntatic sugar this double equals! its actually just a function
  login_success = password_object==login_password

  if login_success 
    session[:user_id]=user[0]['id']
    # session[:user_id]
    redirect '/'
  else
    "failed to login"
  end
end

