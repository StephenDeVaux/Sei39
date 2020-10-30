
def treasureFinder(map)
  map.each_index do |rowi, row|
    p rowi
    p row
    p row.include?("X")
    return [rowi, row.index('X')] if row.include?("X")
  end
end


map1 = [
  %w[A A A A A],
  %w[A A A A A],
  %w[A A X A A],
  %w[A A A A A],
  %w[A A A A A]
]

map3 = [
  %w[A A A A A],
  %w[A A V A A],
  %w[A A A V A],
  %w[v v V v X],
  %w[A V A A A]
]

map4 = [
  %w[A A A A A],
  %w[A A V A A],
  %w[A A A V A],
  %w[v v V v A],
  %w[X V A A A]
]


p treasureFinder map1
p treasureFinder map3
p treasureFinder map4
