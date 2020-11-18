class Phone
    def initialize (number)
        @number = number
    end
    def number
        @number = @number.gsub(/[() -.]/, '')
        if (@number.length == 11 && @number.chars.first == "1")
            @number[1..10]
        elsif @number.length == 11 || @number.length == 9
            "0000000000"
        else
            @number
        end
    end
    def area_code
        @number[0..2]
    end
    def to_s
        "(#{@number[0..2]}) #{@number[3..5]}-#{@number[6..9]}"
    end
end