class Robot 
    def initialize 
        @name = generate_name
    end 
    #public instance methods
    def name 
        return @name
    end
    def reset
        @name = generate_name
    end

    # Anything below here cant be accessed publically
    private
    def generate_name
        "#{prefix}#{postfix}"
    end

    def prefix
        ('a'..'z').to_a.sample(2).join 
    end

    def postfix
        rand(100 ..999) 
    end
end