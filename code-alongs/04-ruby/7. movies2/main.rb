require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

def info_page imdbID 
  url = "http://omdbapi.com/?i=#{imdbID}&apikey=2f6435d9"
  movie_info = HTTParty.get url
  erb :info, locals: { movie: movie_info }
end


get '/' do
  erb :index, locals: {message: ""}
end

get '/list' do
  page = "1"
  if params['page'] != nil
    page = params['page']
  end
  url = "http://omdbapi.com/?s=#{params['search'].strip}&apikey=2f6435d9&page=#{page}"
  movies = HTTParty.get url
  if movies['Response'] == 'False'
    erb :index, locals: {message: "No movies found"}
  elsif movies['totalResults'] == '1'
    info_page movies['Search'][0]['imdbID']
  else
    erb :list, locals: { movies: movies, search:params['search'], page: page  }
  end
end

get '/info' do
  info_page params['imdbid']
end

get '/about' do
  erb :about
end