// # Mini Golf
// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called `totalScores` in JS that calculates their scores and `console.log` the total for each player and their combined total.
var golfGameOne = {
    bob: [3, 2, 6, 11, 9, 2, 6, 9, 10],
    jimbo: [5, 12, 9, 22, 13, 7, 16, 10, 11],
    fish: [2, 2, 4, 5, 4, 3, 6, 4, 1]
}

function totalScores(scoreCards) {
    let players = Object.keys(scoreCards);
    let grandTotal = 0;

    for (let i = 0; i < players.length; i++) {
        let playerTotal = 0;
        let playerScoreCard = scoreCards[players[i]];

        playerScoreCard.forEach(score => playerTotal += score);
        grandTotal += playerTotal;
        console.log(`Score for ${players[i]} is ${playerTotal}`);
    }
    console.log(`The combined score for all the players is ${grandTotal}`)
}
// totalScores(golfGameOne)


//Option 2? 
var golfGameTwo = [{
        name: "bob",
        scores: [3, 2, 6, 11, 9, 2, 6, 9, 10],
    },
    {
        name: "jimbo",
        scores: [5, 12, 9, 22, 13, 7, 16, 10, 11],
    },
    {
        name: "fish",
        scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
    }
]

function totalScores2(scoreCards) {
    let grandTotal = 0;
    scoreCards.forEach(player => {
        let playerTotal = 0;
        player.scores.forEach(holeScore => playerTotal += holeScore)
        console.log(`Score for player${player.name} is ${playerTotal}`)
        grandTotal += playerTotal
    })
    console.log(`The combined score for all the players is ${grandTotal}`)
}

totalScores2(golfGameTwo)