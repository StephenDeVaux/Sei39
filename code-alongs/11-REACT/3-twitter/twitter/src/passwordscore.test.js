const checkPassword = require('./password_score')

test('1 point for lowercase', () => {
    expect( checkPassword('pudding') ).toEqual({ 
      score: 1,
      hasLowerCase: true, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 
  
  test('1 point for uppercase', () => {
    expect( checkPassword('CAKE') ).toEqual({ 
      score: 1,
      hasLowerCase: false, 
      hasUpperCase: true,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })  
  })
  
  test.todo('2 points for lowercase and uppercase')