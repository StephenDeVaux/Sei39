# action = "INSERT INTO lunchOrders (name, lunchOrder) values ('steve', ['pasta', 'carrots']);"
require 'pry'
lunch_orders = []

puts 'Please submit your lunch order'

loop do
  print 'Name for order: '
  name = gets.chomp
  order_list = []
  loop do
    print "#{name} wants to order: "
    order_item = gets.chomp
    order_list.push order_item
    print 'Add another item? (y/n) '
    response = gets.chomp
    break if response == 'n'
  end

  lunch_orders.push([name, order_list])
  print 'Do you want to add another person? (y/n) '
  response = gets.chomp
  break if response == 'n'
end

# binding.pry

puts 'All the orders:'
lunch_orders.each do |order|
    puts "#{order[0]} wants to order #{order[1].join(", ")}"
end

# p lunch_orders
# Should have nested hashes in an array instead of an array 
