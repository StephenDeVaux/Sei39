require_relative 'clock.rb'
require_relative 'monkey.rb'
clock = Clock.new
puts clock.tick()
puts clock.tick()
puts clock.tick()
puts clock.now() 
adam = Monkey.new("Adam", "Spider Monkey")
adam.get_name() # "Adam"
adam.eat('fruit salad')
adam.eat('banana milkshake')
adam.introduce # "Hi my name is Adam. I am a Spider Monkey. I had fruit salad and banana milkshake for brunch"