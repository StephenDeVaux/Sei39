require 'minitest/autorun'
require "minitest/reporters"
require_relative 'valid_pin.rb'

MiniTest::Reporters.use!(MiniTest::Reporters::SpecReporter.new)

#red green refactor
# the test itseld
class ToSentanceTest < MiniTest::Test
    #0000 invalid
    #12345 Invalid
    #123 invalid
    #123a invalid
    #1111 invalid

    # def test_if_numerical 
    #     skip #A way to skip a test if you want
    #     assert_equal false, valid_pin?('123a')
    # end

    def test_pin_with_numbers
        assert_equal true, valid_pin?('5923')
    end

    def test_if_numerical 
        assert_equal false, valid_pin?('123a')
    end

    def test_pin_is_invalid_when_its_not_four_digits
        assert_equal false, valid_pin?('123')
        assert_equal false, valid_pin?('12345')
    end

    def test_pin_is_invalid_all_digits_are_same
        assert_equal false, valid_pin?('0000')
    end
end