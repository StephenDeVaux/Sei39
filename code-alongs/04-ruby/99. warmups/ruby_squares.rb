require 'pry'

def get_squares (num_arr)
    perfect_sqr_arr = [] 

    num_arr.each do |num|
        num_sqrt = Math.sqrt(num)
        if num_sqrt == num_sqrt.round
            perfect_sqr_arr << num
        end
    end

    perfect_sqr_arr.uniq!.sort
end

p get_squares [4, 1, 16, 1, 10, 35, 22]

# binding.pry
