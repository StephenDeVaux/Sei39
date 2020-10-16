     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  db = PG.connect(dbname: 'planets_app')
  sql = "SELECT * FROM planets;"
  planets = db.exec(sql)
  db.close
  erb :index, locals: { planets: planets }
end


post '/addplanet' do
  db = PG.connect(dbname: 'planets_app')
  sql = "INSERT INTO planets (name, image_url, diameter, mass, moon_count) VALUES ('#{params['name']}', '#{params['image_url']}', '#{params['diameter']}', '#{params['mass']}', '#{params['moon_count']}');"
  db.exec(sql)
  db.close
  redirect "/"
end

post '/deleteplanet' do
  db = PG.connect(dbname: 'planets_app')
  sql = "DELETE FROM planets WHERE name = '#{params['name']}';"
  db.exec(sql)
  db.close
  redirect "/"
end


