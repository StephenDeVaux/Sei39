console.log(process.argv.length)

if (process.argv.length <= 2) {
    console.log("hello world")
} else {
    console.log("hello " + process.argv[2])
}