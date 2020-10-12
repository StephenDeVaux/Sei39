require "sinatra"
require 'sinatra/reloader'

get '/cake' do #response
    "🤷"
end

get '/timenow' do 
    "The server time right now is #{Time.now}"
end

get '/crap' do 
    "<h2>The total is = #{params["num1"].to_i + params["num2"].to_i}</h2>"
    # "The total is = #{params["num1"]}"
end

get '/hello/:name' do
    # matches "GET /hello/foo" and "GET /hello/bar"
    # params['name'] is 'foo' or 'bar'
    "<h2>Hello #{params['name']}!</h2>"
end

get '/htmltest' do 
    IO.read("index.html")
end