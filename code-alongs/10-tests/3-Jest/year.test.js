const { TestScheduler } = require("jest");
const Year = require("./year");


test('year 2000 is a leaap year', () => {
    let y = new Year(2000)
    expect(y.isLeap()).toBe(true)
})