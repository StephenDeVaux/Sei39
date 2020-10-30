let trainLines = {
    alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
    glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
    sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}
let lineNames = Object.keys(trainLines)

function journeyPlanner(startStation, endStation) {
    let startLines = lineNames.filter(line => trainLines[line].includes(startStation))
    let endLines = lineNames.filter(line => trainLines[line].includes(endStation))

    //Input validation checks
    if (startLines.length === 0 || endLines.length === 0) {
        return console.log("Please input real station names")
    } else if (startStation === endStation) {
        return console.log("Your trip goes no where?")
    }

    let sharedLines = startLines.filter(line => endLines.includes(line))
    if (sharedLines.length === 0) {
        return multiLineJourney(startLines, endLines, startStation, endStation)
    } else {
        return singleLineJourney(sharedLines, startStation, endStation)
    }
}

function singleLineJourney(sharedLines, startStation, endStation) {
    let journey = buildJourneyArray(trainLines[sharedLines[0]], startStation, endStation)
    consolePrint(
        journey[0],
        journey[journey.length - 1],
        journey.join(" ---> "),
        (journey.length - 1)
    )
}

function multiLineJourney(startLines, endLines, startStation, endStation) {
    let line1 = trainLines[startLines[0]];
    let line2 = trainLines[endLines[0]];
    let intersection = line1.filter(station => line2.includes(station))[0]

    let journey1 = buildJourneyArray(line1, startStation, intersection)
    let journey2 = buildJourneyArray(line2, intersection, endStation)

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

function buildJourneyArray(line, startStation, endStation) {
    let startIndex = line.indexOf(startStation)
    let endIndex = line.indexOf(endStation)
    let journey
    if (startIndex < endIndex) {
        journey = line.slice(startIndex, endIndex + 1)
    } else {
        journey = line.slice(endIndex, startIndex + 1).reverse()
    }
    return journey;
}

function consolePrint(origin, destination, journey, numStops) {
    console.log(`origin: ${origin}`)
    console.log(`destination: ${destination} \n`)
    console.log(journey)
    console.log(`\n${numStops} stops total`)
}

journeyPlanner(process.argv[2], process.argv[3])