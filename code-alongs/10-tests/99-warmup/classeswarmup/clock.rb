class Clock 
    def initialize 
        @counter = 0
    end 
    def tick 
        @counter = @counter + 1
    end
    def now
        return @counter 
    end
    def reset 
        @counter = 0
    end
end