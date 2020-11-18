def to_sentance(arr)
    if arr.length > 2
        "#{arr[0..-2].join(", ")} and #{arr.last}"
    else
        arr.join(" and ")
    end
end