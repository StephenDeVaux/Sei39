require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get "/" do 
    erb :index
end

get "/donate" do 
    erb :donate
end

get "/about" do 
    erb :about
end

# if you didn't want the layout on the page
get "/about1" do 
    erb :about, layout: false 
end

get "/people" do 
    hackers = ["Ned", "Aden", "Matt", "Sannan", "Jian", "Felipe", "Stephen", "Sara", "Jimmy", "Linda", "Stuart", "Sam", "Naveen", "Tom", "Peter", "Bern", "Cath", "Allison", "Sannan"].sort

    erb :hackers, locals: { hackers:hackers }
end