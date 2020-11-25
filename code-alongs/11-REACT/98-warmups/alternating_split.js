function encrypt(message, n) {
    for(let j = 0; j < n; j++){ 
        let part1 = message.split("").filter((char, i) => i%2 === 0 )
        let part2 = message.split("").filter((char, i) => i%2 !== 0 )
        message = part2.join("") + part1.join("")
    }
    console.log( message)
    return message
}

encrypt("This is a test!", 1) // 
encrypt("This is a test!", 2) // 
encrypt("This is a test!", 3) // 
encrypt("This is a test!", 4) // 
