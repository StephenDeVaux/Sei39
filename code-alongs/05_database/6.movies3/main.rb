require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db/db_access'

def info_page imdbID 
  cached_movielist = run_sql("SELECT * FROM cachedmovies1 WHERE imdbid = '#{imdbID}';")
  if cached_movielist.count == 0 
    url = "http://omdbapi.com/?i=#{imdbID}&apikey=2f6435d9"
    movie_info = HTTParty.get url
    run_sql("INSERT INTO cachedmovies1 (imdbid, movie) VALUES ('#{imdbID}', $$#{movie_info.to_s}$$);")
    erb :info, locals: { movie: movie_info, source: "API" }
  else
    movie = JSON.parse(cached_movielist[0]["movie"])
    erb :info, locals: { movie: movie, source: "database" }
  end
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