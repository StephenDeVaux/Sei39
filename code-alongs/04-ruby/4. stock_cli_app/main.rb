require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

api_key = 'pk_afc9b08de46242f1ac34297b8c4194ac'
StockQuote::Stock.new(api_key: api_key) #:: is about name spacing

get '/' do
  erb(:main)
end

get '/apple' do
  # stock is a custom object
  stock = StockQuote::Stock.quote('aapl')
  "Your stock price is: #{stock.latest_price}"
end

get '/price' do
  # stock is a custom object
  stock = StockQuote::Stock.quote(params['stock'])
  "#{stock.company_name}'s current stock price is: #{stock.latest_price}<br>Market Cap = #{stock.market_cap}<br>The change is = #{stock.change}"
end

get '/gettest' do
  arrayvar = { price: 'vlah', price2: 'R101' }
  erb(:test, locals: arrayvar) # if you use this function it will look for templates in the views dir
end

get '/style.css' do
  # erb(:test) #if you use this function it will look for templates in the views dir
  IO.read('style.css')
end

get '/stockprice' do
  # stock is a custom object
  stock = StockQuote::Stock.quote(params['stock'])

  arrayvar = { name: stock.company_name, price: stock.latest_price, cap: stock.market_cap, change: stock.change }
  erb(:stockstemp, locals: arrayvar) # if you use this function it will look for templates in the views dir
end

# binding.pry
