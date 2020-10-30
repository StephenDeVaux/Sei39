require 'pg'
require_relative 'data_access'

dishes_arr = ['Arepas', 'Barbecue Ribs', 'Bruschette with Tomato', 'Bunny Chow', 'Caesar Salad', 'California Maki', 'Caprese Salad', 'Cauliflower Penne', 'Cheeseburger', 'Chicken Fajitas', 'Chicken Milanese', 'Chicken Parm', 'Chicken Wings', 'Chilli con Carne', 'Ebiten maki', 'Fettuccine Alfredo', 'Fish and Chips', 'French Fries with Sausages', 'French Toast', 'Hummus', 'Katsu Curry', 'Kebab', 'Lasagne', 'Linguine with Clams', 'Massaman Curry', 'Meatballs with Sauce', 'Mushroom Risotto', 'Pappardelle alla Bolognese', 'Pasta Carbonara', 'Pasta and Beans', 'Pasta with Tomato and Basil', 'Peking Duck', 'Philadelphia Maki', 'Pho', 'Pierogi', 'Pizza', 'Poke', 'Pork Belly Buns', 'Pork Sausage Roll', 'Poutine', 'Ricotta Stuffed Ravioli', 'Risotto with Seafood', 'Salmon Nigiri', 'Scotch Eggs', 'Seafood Paella', 'Som Tam', 'Souvlaki', 'Stinky Tofu', 'Sushi', 'Tacos', 'Teriyaki Chicken Donburi', 'Tiramisù', 'Tuna Sashimi', 'Vegetable Soup']

dishes_arr.each do |dish_name|
  add_dish(dish_name, "https://loremflickr.com/320/240/#{dish_name}", "1")
end
