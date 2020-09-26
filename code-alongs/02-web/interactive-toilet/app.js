var bowl = document.querySelector(".bowl-inner")
var flusher = document.querySelector(".flusher")

bowl.addEventListener('click', poop)
flusher.addEventListener('click', flush)

function poop() {
    bowl.style.backgroundColor = 'darkolivegreen'
    bowl.style["box-shadow"] = 'inset 0 0 20px white'
}

function flush() {
    console.log("flusher")
    bowl.style.backgroundColor = 'palegoldenrod'
    bowl.style["box-shadow"] = 'inset 0 0 20px rgb(122, 122, 122)'
}