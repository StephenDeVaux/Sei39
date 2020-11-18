class Year 
    def initialize(test_year) 
        @year = test_year
    end
    def leap?
        if @year%400 == 0
            true
        elsif @year%4 == 0 && @year%100 != 0
            true
        else
            false
        end
    end
end
