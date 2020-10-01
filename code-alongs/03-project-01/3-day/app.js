let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("button")

function turnRed(e) {
    e.target.classList.add("red")
    checkAll()
}

//function to check if all red, and if so turn green
function checkAll() {
    NumRedBoxes = document.querySelectorAll(".red").length
    if (NumRedBoxes === 3) {
        // boxes.forEach(console.log("turn green"))
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("red")
            boxes[i].classList.add("green")
        }
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", turnRed)
}

resetBtn.addEventListener("click", function() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("red")
        boxes[i].classList.remove("green")
    }
})