class Queens
    def initialize (placement= {white: [0, 3], black: [7, 3]})
        raise ArgumentError.new(
          "Expected pieces to be in different positions"
        ) if placement[:white] == placement[:black]
        @white = placement[:white]
        @black = placement[:black]
    end    
    def white 
        @white
    end
    def black
        @black
    end
    def to_s 
        @board = empty_board
        @board = place_white(@board, @white)
        @board = place_black(@board, @black)
        create_print_board(@board)
    end
    def attack?
        if (@white[0] == @black[0])
            return true
        end
        if @white[1] == @black[1]
            return true
        end 
        row_diff = @white[0] - black[0]
        col_diff = @white[1] - black[1]
        puts row_diff
        puts col_diff
        if row_diff == col_diff
            return true
        end
        if row_diff == -col_diff
            return true
        end
        false
    end

    private
    def empty_board 
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ]
    end
    def place_white ( board, position)
        board[position[0]][position[1]] = "W"
        board
    end

    def place_black (board, position)
        board[position[0]][position[1]] = "B"
        board
    end

    def create_print_board (board)


        stringBoard = board.map { |x|
            x.join (" ")
        }


        stringBoard.join("\n").chomp
    end
end