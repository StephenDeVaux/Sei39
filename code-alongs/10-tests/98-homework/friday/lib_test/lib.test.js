const {
    findShortestWords,
    maskify,
    truncate,
    capitalize,
    objectToQueryString
  } = require('./lib')
  
  test('truncate', () => {
    expect(truncate('Knowledge is limited. Imagination encircles the world.', 6)).toBe('Knowle')
    expect(truncate('Knowledge is limited. Imagination encircles the world.', 3)).toBe('Kno')  
  })
  
  test('maskify string', () => {
    expect(maskify("4556364607935616")).toBe("############5616")
    expect(maskify("4111368809134242")).toBe("############4242")  
  })
  
  test('capitalize', () => {
    expect(capitalize("test driven development")).toBe('Test Driven Development')
    expect(capitalize("hello world")).toBe('Hello World')                    
  })
  
  test('shortest words in sentence', () => {
    let shortestWords = findShortestWords("The quick brown fox jumped over the lazy dogs back.")
    expect(shortestWords).toEqual(['fox', 'the', 'the'])
  })
  
  test('objectToQueryString works with multiple key value pairs', () => {
    var params = {
      t: "jaws",
      apikey: "123456",
      page: "5"
    }
    
    expect(objectToQueryString(params)).toBe("?t=jaws&apikey=123456&page=5")
  })
  
  test('objectToQueryString works with empty object', () => {
    var params = {}
    
    expect(objectToQueryString(params)).toBe("")
  })
  
  