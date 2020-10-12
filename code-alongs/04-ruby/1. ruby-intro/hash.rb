# object literals in js
# python dictionary
# map
# php associate arrays
# hash - hash table
# json - javascript object notation

require "pry" 

movie = {
    "title" => "sharknado", 
    "year" => 2000, 
    "stars" => [ 'sharks', 'tornadoe'],
    :titletest => "can also do it this way, but silly",
    review: {
        score: 5,
        authoer: "dt"
    }
}

puts movie["title"] #this is how youd access it
puts movie[:titletest] #this is how youd access it
puts movie[:review][:score]


# new hash syntax - copied from js. This is the preffered way of writing hash syntax in ruby
movie2 = {
    title: "sharknado", 
    year: 2000, 
    stars: [ 'sharks', 'tornadoe']
}

puts movie2[:title]



binding.pry

