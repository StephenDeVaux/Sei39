require 'sinatra'
require 'sinatra/reloader' # only reloads the main.rb file....
also_reload 'db/data_access'
require 'pg'
require_relative 'db/data_access.rb'
require 'bcrypt'
enable :sessions # global variabls named session - which is just a hash

def logged_in?
  if session[:user_id]
    true
  else
    false
  end
end

def current_user
  find_user_by_id(session[:user_id])
end

get '/' do
  redirect '/login' unless logged_in?
  dishes = all_dishes
  erb :index, locals: { dishes: dishes }
end

get '/dishes/new' do
  erb :add
end

get '/dishes/:id' do
  redirect '/login' unless logged_in?
  dish = find_dish_by_id(params['id'])
  comments = find_comments_by_dish(params['id'])
  erb :details, locals: { dish: dish, user: current_user, comments: comments }
end

post '/dishes' do
  redirect '/login' unless logged_in?
  add_dish(params['name'], params['image_url'], session[:user_id])
  redirect '/'
end

delete '/dishes' do
  redirect '/login' unless logged_in?
  delete_dish(params['id'])
  redirect '/'
end

get '/dishes/:id/edit' do
  redirect '/login' unless logged_in?
  dish = run_sql("SELECT * FROM dishes WHERE id = '#{params['id']}';")
  erb :edit, locals: { dish: dish[0] }
end

patch '/dishes/:id' do
  redirect '/login' unless logged_in?
  edit_dish(params['id'], params['name'], params['image_url'])
  redirect "/dishes/#{params['id']}"
end

get '/login' do
  erb :login
end

post '/login' do
  user = find_user_by_email(params['email'])
  # syntatic sugar this double equals! its actually just a function
  if BCrypt::Password.new(user['password_digest']) == params['password']
    session[:user_id] = user['id']
    redirect '/'
  else
    'failed to login'
  end
end

delete '/logout' do
  redirect '/login' unless logged_in?
  session[:user_id] = nil
  redirect '/login'
end

post '/comment' do 
  redirect '/login' unless logged_in?
  create_comment(params['content'], session[:user_id], params["dish_id"])
  redirect "/dishes/#{params["dish_id"]}"
end

delete '/comment' do
  redirect '/login' unless logged_in?
  delete_comment_by_id(params["id"])
  redirect "/dishes/#{params["dish_id"]}"
end