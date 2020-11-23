class Say
    def initialize(num)
        @number = num
        @convert = {
            0 => "",
            1 => "one",
            2 => "two", 
            3 => "three",
            4 => "four",
            5 => "five", 
            6 => "six", 
            7 => "seven", 
            8 => "eight", 
            9 => "nine",
            10 => "ten"
        }
        @convert_teens = {
            11 => "eleven", 
            12 => "twelve",
            13 => "thirteen",
            14 => "fourteen",
            15 => "fifteen", 
            16 => "sixteen", 
            17 => "seventeen", 
            18 => "eightteen",
            19 => "nineteen"
        }
        @convert_decades = { 
            2 => "twenty",
            3 => "thirty",
            4 => "forty", 
            5 => "fifty",
            6 => "sixty",
            7 => "seventy", 
            8 => "eighty", 
            9 => "ninety"
        }
    end
    def in_english
        if @number < 0 || @number > 99 
            raise "Number must be between 0 and 99, inclusive"
        end
        if @number < 11 
            puts `say #{@convert[@number]}` 
            return puts @convert[@number]
        end
        if @number < 20
            puts `say #{@convert_teens[@number]}` 
            return puts @convert_teens[@number]
        end
        puts `say #{@convert_decades[@number.to_s[0].to_i]} #{@convert[@number.to_s[1].to_i]}`
        return puts "#{@convert_decades[@number.to_s[0].to_i]} #{@convert[@number.to_s[1].to_i]}"
    end
end
