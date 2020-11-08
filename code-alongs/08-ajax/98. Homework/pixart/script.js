let setColorBtn = document.querySelector('.color_btn')
let setBgBtn = document.querySelector('.bg_btn')
let colInput = document.querySelector('.color_inpt')
let bgInput = document.querySelector('.bg_inpt')
let brushBox = document.querySelector('.brush_box')
let grid = document.querySelector('.grid')

let selectedColor = "Black"
brushBox.style.backgroundColor = selectedColor


setColorBtn.addEventListener("click", function(event) {
    event.preventDefault()
    console.log(colInput.value)
    selectedColor = colInput.value
    brushBox.style.backgroundColor = selectedColor
})

setBgBtn.addEventListener("click", function(event) {
    event.preventDefault()
    axios.get(`http://omdbapi.com/?s=${bgInput.value}&apikey=2f6435d9`).then(handleResponse)
})

for (let i = 0; i < 5000; i++) {
    let block = document.createElement('div')
    block.addEventListener('mouseover', (event) => {
        block.style.backgroundColor = selectedColor;
    })
    block.classList.add("block")
    grid.append(block)
}

function handleResponse(res) {
    console.log(res.data.Search[0].Poster)

    document.body.style.backgroundImage = `url("${res.data.Search[0].Poster}")`
}

// document.body.style.backgroundImage = `url("https://factorydirectcraft.com/pimages/20180209103524-731979/dollhouse_miniature_rubber_ducky.jpg")`
// https: //target.scene7.com/is/image/Target/GUEST_cc032d78-7158-4818-9801-0489f5e50bf6?wid=488&hei=488&fmt=pjpeg


// Karen Finch
// Colin Kinner 
// Adma Wiess
// Kate Eriksson