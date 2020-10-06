require 'fileutils' #

hackers = ['ned awesome', 'cath cath', 'same kuo']

FileUtils.mkdir 'hackers'

hackers.each do |element|
    puts element
    FileUtils.mkdir "hackers/#{element.sub(" ", "_")}"
    FileUtils.touch "hackers/#{element.sub(" ", "_")}/README.md"
end
