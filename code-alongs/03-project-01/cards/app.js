var spans = document.querySelectorAll('.numbers');
var body = document.body
var isVisibleMsg = document.querySelector('h2')
var lightBtn = document.querySelector('#lightbtn')
var darkBtn = document.querySelector("#darkbtn")

lightbtn.addEventListener('click', function() {
    body.className = 'light-mode';
})

darkBtn.addEventListener('click', function() {
    body.className = 'dark-mode';
})

for (var i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', handleClick)
}


function handleClick(event) {
    event.target.classList.add("hide");
    checkIfAllHidden()
}

function checkIfAllHidden() {
    let numOfNumbers = document.querySelectorAll('span.numbers').length
    let numHidden = document.querySelectorAll('span .hide').length
    console.log(numOfNumbers)
    console.log(numHidden)
    if (numOfNumbers === numHidden) {
        isVisibleMsg.classList.remove("hide")
    } else {
        isVisibleMsg.classList.add("hide")
    }
}