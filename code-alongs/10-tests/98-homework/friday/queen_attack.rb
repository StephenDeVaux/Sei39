require_relative 'queens'

queens = Queens.new()

queens = Queens.new(white: [0, 6], black: [1, 7])
assert queens.attack?