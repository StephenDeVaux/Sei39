function coinFlip() {
    let num = Math.round(Math.random())
    let coin = "TAILS"
    if (num == 0) {
        coin = "HEADS"
    }
    console.log(coin)
    return coin
}

let button = document.querySelector("button")
let imgHead = document.querySelector(".head")
let imgTail = document.querySelector(".tail")

button.addEventListener("click", function() {
    this.textContent = "......."
    setTimeout(
        function() {
            if (coinFlip() == "HEADS") {
                imgHead.style.opacity = 1;
                imgTail.style.opacity = 0;
                button.textContent = "Flip it"
            } else {
                imgHead.style.opacity = 0;
                imgTail.style.opacity = 1;
                button.textContent = "Flip it"
            }
        },
        1000
    )
})