class Phone
    def initialize (number)
        @number = number
    end
    def number
        validate( clean @number)
    end
    def area_code
        @number[0..2]
    end
    def to_s
        "(#{area_code}) #{prefix}-#{line_number}"
    end

    # can basically call these pure functions as they dont mutate anything
    private
    def validate(num)
        if valid_length?(num)
            num
        elsif eleven_starts_with_one(num)
            num[1..-1]
        else
            "0000000000"
        end
    end

    def valid_length?(num)
        num.length == 10
    end

    def eleven_starts_with_one(num)
        @number.length == 11 && @number.start_with?("1")
    end

    def clean(num) 
        @number = @number.gsub(/[() -.]/, '')
    end

    def prefix 
        @number[3..5]
    end
    
    def line_number
        @number[6..9]
    end
end