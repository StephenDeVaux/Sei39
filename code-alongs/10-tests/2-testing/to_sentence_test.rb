#writing tests for the to-sentance method
require 'minitest/autorun'
require "minitest/reporters"
require_relative 'to_sentance.rb'

MiniTest::Reporters.use!(MiniTest::Reporters::SpecReporter.new)

#red green refactor
# the test itseld
class ToSentanceTest < MiniTest::Test

    # these are the test cases
    # test cases always strat with test_

    def test_empty_array
        assert_equal "", to_sentance([])
    end

    def test_one_word
        assert_equal "kiwi", to_sentance(["kiwi"])
        assert_equal "mango", to_sentance(["mango"])
    end

    def test_two_words
        assert_equal "js and ruby", to_sentance(['js', 'ruby'])
    end
  
    def test_three_words
        assert_equal "js, ruby and python", to_sentance(['js', 'ruby', 'python'])
    end
   
    def test_four_words
        assert_equal "js, ruby, python and php", to_sentance(['js', 'ruby', 'python', 'php'])
    end

    def test_integers
        assert_equal "1, 2, 3 and 4", to_sentance([1, 2, 3, 4])
    end

end

