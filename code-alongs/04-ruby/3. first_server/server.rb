
def serve request
    # make sure we have what the user wants
    if File.file? request
        puts "Here is your file"
        return request
    else 
        return "Sorry no file found"
    end
end


loop do 
    puts "listening for a request......."
    request = gets.chomp
    puts serve(request)
end