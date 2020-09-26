let button = document.querySelector("button")
let span = document.querySelector("span")
let input1 = document.querySelector(".num1")
let input2 = document.querySelector(".num2")

function calculate() {
    let total = Number(input1.value) + Number(input2.value)
    span.textContent = total
}

button.addEventListener("click", calculate)