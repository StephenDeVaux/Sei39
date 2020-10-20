
def create_board (rows, columns)
    row_1 = "# " * columns + "\n"
    row_2 = " #" * columns + "\n"

    if (rows % 2 == 0) 
        board = (row_1 + row_2) * (rows/2) 
    else
        board = (row_1 + row_2) * ((rows-1)/2) + row_1 
    end
end

puts "5,5"
print create_board(5,5)
puts "4,4"
print create_board(4,4)