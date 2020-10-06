### 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday
days_of_the_week = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
puts "1. days of the week - #{days_of_the_week}"

### 2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.
removed_item = days_of_the_week.pop
days_of_the_week.unshift removed_item
puts "2. days of the week - #{days_of_the_week}"

### 3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days
new_array = [ days_of_the_week[1..5], [ days_of_the_week.first , days_of_the_week.last ]]
puts "3. New array - #{new_array}"

### 4. Remove either the weekdays or the weekends
# Your choice...
new_array.pop
new_array.flatten!
puts "4. New array - #{new_array}"

### 5. Sort the remaining days alphabetically
new_array = new_array.sort
puts "5. New array - #{new_array}"