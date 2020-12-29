// let ten = {
//     0: "",
//     1: "I",
//     2: "II",
//     3: "III",
//     4: "IV",
//     5: "V",
//     6: "VI",
//     7: "VII",
//     8: "VIII",
//     9: "IX",
// }
// let hundred = {
//     00: "",
//     10: "X",
//     20: "XX",
//     30: "XXX",
//     40: "XL",
//     50: "L",
//     60: "LX",
//     70: "LXX",
//     80: "LXXX",
//     90: "XC",
// }
// let thousand = {
//     000: "",
//     100: "C",
//     200: "CC",
//     300: "CCC",
//     400: "CD",
//     500: "D"
// }

// function convertRoman(num) {
//     if (num < 10) {
//         return ten[num]
//     } else if (num < 100) {
//         let n = String(num)
//         return hundred[n[0] + "0"] + ten[n[1]]
//     } else if (num < 1000) {
//         let n = String(num)
//         return thousand[n[0] + "00"] + hundred[parseInt(n[1] + "0")] + ten[n[2]]
//     }
// }

// console.log(convertRoman(1))
// console.log(convertRoman(10))
// console.log(convertRoman(29))
// console.log(convertRoman(36))
// console.log(convertRoman(95))
// console.log(convertRoman(100))
// console.log(convertRoman(151))
// console.log(convertRoman(448))


var roman = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];
  
function convertNumbersToRoman(num) {
    // if (num === 0) {
    //     return '';
    // }
    for (var i = 0; i < roman.length; i++) {
        if (num >= roman[i][0]) {
        return roman[i][1] + convertNumbersToRoman(num - roman[i][0]);
        }
    }
}

console.log(convertNumbersToRoman(2974))
console.log(convertNumbersToRoman(543))
console.log(convertNumbersToRoman(87))