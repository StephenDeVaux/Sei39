var startPoint = { name: "General Assembly", location: { lat: -37.818555, long: 144.959076 } }

var results = [
    { name: "Melbourne Cricket Grounds", location: { lat: -37.819967, long: 144.983449 } },
    { name: "Flagstaff Gardens", location: { lat: -37.810680, long: 144.954352 } },
    { name: "Emporium Melbourne", location: { lat: -37.812433, long: 144.963787 } },
    { name: "City Library", location: { lat: -37.817039, long: 144.965983 } },
    { name: "Southern Cross Station", location: { lat: -37.818281, long: 144.952776 } },
    { name: "Sea Life Melbourne Aquarium", location: { lat: -37.820640, long: 144.958325 } }
]

const getDist = (pt1, pt2) => {
    let tomsApproximation = calcTomsApproximation(pt1, pt2)
    let pythagoras = calPythagorus(pt1, pt2)
    let haversineFormula = calcHaversine(pt1, pt2)
    return { name: pt1.name, tomsApproximation, pythagoras, haversineFormula }
}
const sortDistance = (a, b) => { return a.haversineFormula - b.haversineFormula }

function printClosestPoints(pointStart, pointArr) {
    console.log(
            pointArr
            .map(point => getDist(point, pointStart))
            .sort(sortDistance)
        )
        // .forEach(point => console.log(point.name))
    return
}

console.log("Calculated distances to each point, results are in meteres")
printClosestPoints(startPoint, results)


function calcHaversine(pt1, pt2) {
    let lat1 = pt1.location.lat
    let long1 = pt1.location.long
    let lat2 = pt2.location.lat
    let long2 = pt2.location.long

    let R = 6371000 //earth radius
    let phi_1 = lat1 * Math.PI / 180
    let phi_2 = lat2 * Math.PI / 180
    let deltaPhi = (lat2 - lat1) * Math.PI / 180
    let delta_lambda = (long2 - long1) * Math.PI / 180

    let a = Math.sin(deltaPhi / 2) ** 2 + Math.cos(phi_1) * Math.cos(phi_2) * Math.sin(delta_lambda / 2) ** 2

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    let meters = R * c // output distance in meters
    let km = meters / 1000.0 // output distance in kilometers

    meters = Math.round(meters, 3)
    km = Math.round(km, 3)
    return meters
}

function calPythagorus(pt1, pt2) {
    let x = pt1.location.lat - pt2.location.lat;
    let y = pt1.location.long - pt2.location.long;
    let distance = Math.sqrt(x ** 2 + y ** 2)
    return Math.round(distance * 111000)
}

function calcTomsApproximation(pt1, pt2) {
    let x = pt1.location.lat - pt2.location.lat;
    let y = pt1.location.long - pt2.location.long;
    let distance = Math.abs(x) + Math.abs(y)
    return Math.round(distance * 111000)
}