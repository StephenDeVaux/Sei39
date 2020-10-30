trainLines = {
    alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
    glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
    sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

journeyPlanner("Hawthorn", "Prahran")

function journeyPlanner(startStation, endStation) {
    let stationlist = findStationList(startStation, endStation)
    let start = stationlist.start
    let end = stationlist.end

    if (end.line === start.line) {
        let journey = createJourney(trainLines[start.line], start.stationIndex, end.stationIndex)
        printJourney(journey)
    } else {
        let journey1 = createJourney(trainLines[start.line], start.stationIndex, trainLines[start.line].indexOf("Richmond"))
        let journey2 = createJourney(trainLines[end.line], trainLines[end.line].indexOf("Richmond"), end.stationIndex)
        printJourneyConnection(journey1, journey2)
    }
}

function findStationList(startStation, endStation) {
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
    consolePrint(
        journey[0],
        journey[journey.length - 1],
        journey.join(" ---> "),
        (journey.length - 1)
    )
}

function printJourneyConnection(journey1, journey2) {
    let journeyString1 = journey1.join(" ---> ")
    let changeOver = new Array(journeyString1.length - 4).join(" ") + "||";
    let journeyString2 = new Array(journeyString1.length - 7).join(" ") + journey2.join(" ---> ");
    consolePrint(
        journey1[0],
        journey2[journey2.length - 1],
        journeyString1 + "\n" + changeOver + "\n" + journeyString2,
        journey1.length + journey2.length - 2
    )
}

function consolePrint(origin, destination, journey, numStops) {
    console.log(`origin: ${origin}`)
    console.log(`destination: ${destination} \n`)
    console.log(journey)
    console.log(`\n${numStops} stops total`)
}