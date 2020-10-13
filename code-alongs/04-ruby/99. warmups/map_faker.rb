# Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map.
# It should be filled with the 'A' character
require 'pry'

def make_fake_map (rows, columns)
    map = []
    column = []
    columns.times { column.push "A" } 
    rows.times { map.push column } 

    p treasure_row = rand(0..rows-1)
    p treasure_col = rand(0..columns-1)
    # map_with_treaure = Marshal.load( Marshal.dump(map) )
    map_with_treaure = map.map(&:clone)
    map_with_treaure[treasure_row][treasure_col] = "X"
    map_with_treaure
end

def make_fake_map2 (rows, columns)
    column = Array.new(columns, "A")
    map = Array.new(rows, column)

    p treasure_row = rand(0..rows-1)
    p treasure_col = rand(0..columns-1)
    # map_with_treaure = Marshal.load( Marshal.dump(map) )
    map_with_treaure = map.map(&:clone)
    map_with_treaure[treasure_row][treasure_col] = "X"
    map_with_treaure
end

puts "test"
p make_fake_map 5, 5
print make_fake_map2 5, 5

# binding.pry
