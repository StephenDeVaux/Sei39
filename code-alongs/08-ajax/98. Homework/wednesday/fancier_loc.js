const fs = require('fs')
console.log("node lines of code counter")

const file = process.argv[2] || "test1.js"
let code = 0
let comment = 0
let blanks = 0

let fileLinesArr = fs.readFileSync(file).toString().split("\n")

let inStarComment = false
for (let i = 0; i < fileLinesArr.length; i++) {
    let line = fileLinesArr[i]

    if (line.trim().slice(0, 2) === "/*" && line.includes("*/")) {
        comment++;
    } else if (line.trim().slice(0, 2) === "/*") {
        comment++;
        inStarComment = true;
    } else if (line.includes("*/")) {
        comment++;
        inStarComment = false;
    } else if (!inStarComment) {
        if (line === "") {
            blanks++;
        } else if (line.trim().slice(0, 2) === "//") {
            comment++;
        } else {
            code++;
        }
    } else {
        comment++;
    }
}

console.log(`code: ${code}`)
console.log(`comment: ${comment}`)
console.log(`blank: ${blanks}`)
console.log(`---------`)
console.log(`Total: ` + (code + comment + blanks))