fs = require('fs');
fs.readFile('./data.txt', 'utf8', function (err, data) {
    let dataArr = data.split("\n")
    let outputData = {}
    dataArr.forEach(line => {
        let dealInfo = line.split(",")
        if (dealInfo[0] !== "customer") {
            if (outputData[dealInfo[0]]) {
                outputData[dealInfo[0]].push({
                    product: dealInfo[1],
                    unitPrice: dealInfo[2],
                    units: dealInfo[3],
                    totalPrice: parseFloat(dealInfo[2]) * parseFloat(dealInfo[3])
                })
            } else {
                outputData[dealInfo[0]] = [{
                    product: dealInfo[1],
                    unitPrice: dealInfo[2],
                    units: dealInfo[3],
                    totalPrice: parseFloat(dealInfo[2]) * parseFloat(dealInfo[3])
                }]
            }

        }
    })
    console.log(outputData)
})