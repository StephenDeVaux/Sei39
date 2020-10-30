int_arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5, 46]

def odd_int(arr)
  odd_ints = []
  arr.each do |n|
    odd_ints << n if arr.count(n).odd?
  end
  odd_ints.uniq
end

puts odd_int(int_arr)
