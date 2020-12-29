module.exports = (password) => {

    let score = 0
    let checkNumRegex = /\d/
    let checkLowerCase = /[a-z]/
    let checkUpperCase = /[A-Z]/
    let checkNonAlphaNum = /[^a-zA-Z\d\s:]/

    if (checkNumRegex.test(password)) {
        score++
    }
    if (checkLowerCase.test(password)) {
        score++
    }
    if (checkUpperCase.test(password)) {
        score++
    }
    if (checkNonAlphaNum.test(password)) {
        score++
    }
    if (password.length > 8) {
        score++
    }
    if (password.length > 12) {
        score++
    }

    return {
        score,
        hasLowerCase: checkLowerCase.test(password) ,
        hasUpperCase: checkUpperCase.test(password) ,
        hasNumber: checkNumRegex.test(password),
        hasNonAlphaNumeric: checkNonAlphaNum.test(password),
        isOver8Char: password.length > 8,
        isOver12Char: password.length > 12
    }
}