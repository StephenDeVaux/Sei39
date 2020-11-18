def valid_pin? (pin)
    if pin.to_i.to_s != pin
        false
    elsif pin.size != 4
        false
    elsif pin.chars.uniq.size == 1 #pin.count(pin[1]) == 4
        false
    else
        true
    end
end
