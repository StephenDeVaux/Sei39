require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :index
end

get '/info' do
  url = "http://omdbapi.com/?t=#{params["title"]}&apikey=2f6435d9"
  movie_info = HTTParty.get url
  
#   movie_info.delete.(:Actors)
#   erb(:info, locals: movie_info)

  erb(:info, locals: {movie: movie_info})
end

get '/about' do 
    erb :about
end