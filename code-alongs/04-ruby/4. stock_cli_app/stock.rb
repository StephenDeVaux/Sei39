require 'stock_quote'
require 'pry'

api_key = "pk_afc9b08de46242f1ac34297b8c4194ac"
StockQuote::Stock.new(api_key: api_key)

ticker = ARGV[0]
puts ticker

# stock is a custom object
stock = StockQuote::Stock.quote(ticker)
puts stock.latest_price

# binding.pry