     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  db = PG.connect(dbname: 'goodfoodhunting')
  sql = "SELECT * FROM dishes;"
  dishes = db.exec(sql)
  db.close
  erb :index, locals: { dishes: dishes }
end

get '/details' do
  db = PG.connect(dbname: 'goodfoodhunting')
  sql = "SELECT * FROM dishes WHERE name = '#{params["dish"]}';"
  dish = db.exec(sql)
  db.close
  erb :details, locals: { dish: dish[0]}
end

get '/upload' do 
  erb :upload
end

post '/upload/dish' do 
  db = PG.connect(dbname: 'goodfoodhunting')
  sql = "INSERT INTO dishes(name, image_url) VALUES('#{params['name']}', '#{params['image_url']}');"
  dish = db.exec(sql)

  redirect "/"
end



