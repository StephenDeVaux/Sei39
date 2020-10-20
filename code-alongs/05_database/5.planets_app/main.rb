     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'planets_app')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  planets = run_sql("SELECT * FROM planets;")
  erb :index, locals: { planets: planets }
end

get '/planet/new' do 
  erb :add
end

get '/planet/:id' do 
  planets = run_sql("SELECT * FROM planets WHERE id ='#{params['id']}';")
  erb :planet, locals: { planet: planets[0]}
end

post '/planet' do
  run_sql("INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{params['name']}', '#{params['image_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}');")
  redirect "/"
end

delete '/planet/:id' do
  run_sql("DELETE FROM planets WHERE id = '#{params['id']}';")
  redirect "/"
end

get '/planet/:id/edit' do
  planets = run_sql("SELECT * FROM planets WHERE id ='#{params['id']}';")
  erb :edit, locals: { planet: planets[0] }
end

patch '/planet/:id' do 
  run_sql("UPDATE planets SET name = '#{params["name"]}', diameter = '#{params["diameter"]}', mass = '#{params["mass"]}', moon_count = '#{params["moon_count"]}', image_url = '#{params["image_url"]}' WHERE id = '#{params["id"]}';")
  redirect "/planet/#{params["id"]}"
end


