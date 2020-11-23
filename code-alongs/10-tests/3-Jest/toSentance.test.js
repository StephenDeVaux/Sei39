const toSentance = require("./toSentance")

test('it works', () => {
    expect(true).toBe(true)
})

test('empty array', () => {
    expect(toSentance([])).toBe("")
})

test('one word', () => {
    const actual = toSentance(["hello"])
    expect(actual).toBe("hello")
})

test('2 words', () => {
    const actual = toSentance(["kiwi", "banana"])
    expect(actual).toBe("kiwi and banana")
})

test('3 words', () => {
    const actual = toSentance(["kiwi", "banana", "pear"])
    expect(actual).toBe("kiwi, banana and pear")
})

test('5 words', () => {
    const actual = toSentance(["kiwi", "banana", "pear", "grape", "seed"])
    expect(actual).toBe("kiwi, banana, pear, grape and seed")
})

test.skip('2 items test how to skip', () => {
    const actual = toSentance(["kiwi", "banana"])
    expect(actual).toBe("kiwi and banana")
})