trainLines = {
    alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
    glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
    sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

journeyPlanner("Burnley", "Richmond")

function journeyPlanner(startStation, endStation) {
    // start = findStation(startStation)
    // end = findStation(endStation)
    stationlist = findStation2(startStation, endStation)
    console.log(stationlist)
    start = stationlist.start
    end = stationlist.end

    if (start.line === "all") {
        let journey = createJourney(trainLines[end.line], start[end.line], end.stationIndex)
        printJourney(journey)
    } else if (end.line === "all") {
        let journey = createJourney(trainLines[start.line], start.stationIndex, end[start.line])
        printJourney(journey)
    } else if (end.line === start.line) {
        let journey = createJourney(trainLines[start.line], start.stationIndex, end.stationIndex)
        printJourney(journey)
    } else {
        let journey1 = createJourney(trainLines[start.line], start.stationIndex, trainLines[start.line].indexOf("Richmond"))
        let journey2 = createJourney(trainLines[end.line], trainLines[end.line].indexOf("Richmond"), end.stationIndex)
        printJourney2(journey1, journey2)
    }
}

function findStation2(startStation, endStation) {
    let lines = Object.keys(trainLines)
    let start = []
    let end = []
    lines.forEach(line => {
        if (trainLines[line].includes(startStation)) {
            start.push({ line, stationIndex: trainLines[line].indexOf(startStation) })
        }
        if (trainLines[line].includes(endStation)) {
            end.push({ line, stationIndex: trainLines[line].indexOf(endStation) })
        }
    })

    if (end.length !== 1) {
        start = start[0]
        end = end.find(station => station.line = start.line);
    } else if (start.length !== 1) {
        end = end[0]
        start = start.find(station => station.line = end.line);
    } else {
        end = end[0];
        start = start[0]
    }
    return { start, end }
}

function findStation(station) {
    if (station === "Richmond") {
        return { line: "all", alamein: 1, glenWaverly: 3, sandringham: 1 }
    } else if (trainLines.alamein.includes(station)) {
        let stationIndex = trainLines.alamein.findIndex(i => i === station)
        return { line: "alamein", stationIndex }
    } else if (trainLines.glenWaverly.includes(station)) {
        let stationIndex = trainLines.glenWaverly.findIndex(i => i === station)
        return { line: "glenWaverly", stationIndex }
    } else if (trainLines.sandringham.includes(station)) {
        let stationIndex = trainLines.sandringham.findIndex(i => i === station)
        return { line: "sandringham", stationIndex }
    }
    return null;
}


function createJourney(line, startIndex, endIndex) {
    let journey
    if (startIndex < endIndex) {
        journey = line.slice(startIndex, endIndex + 1)
    } else {
        journey = line.slice(endIndex, startIndex + 1).reverse()
    }
    return journey
}

function printJourney(journey) {
    console.log(`origin: ${journey[0]}`)
    console.log(`destination: ${journey[journey.length - 1]}`)
    console.log('')
    let journeyString = journey[0]
    for (let i = 1; i < journey.length; i++) {
        journeyString += ` --> ` + journey[i];
    }
    console.log(journeyString)
    console.log("")
    console.log((journey.length - 1) + " stops total")
}


function printJourney2(journey1, journey2) {
    console.log(`origin: ${journey1[0]}`)
    console.log(`destination: ${journey2[journey2.length - 1]} \n`)
    let journeyString1 = journey1[0]
    for (let i = 1; i < journey1.length; i++) {
        journeyString1 += ` --> ` + journey1[i];
    }
    console.log(journeyString1)

    let changeOver = new Array(journeyString1.length - 4).join(" ") + "||";
    console.log(changeOver)

    let journeyString2 = new Array(journeyString1.length - 7).join(" ") + journey2[0];
    for (let i = 1; i < journey2.length; i++) {
        journeyString2 += ` --> ` + journey2[i];
    }
    console.log(journeyString2)

    console.log("\n" + (journey1.length + journey2.length - 2) + " stops total")
}