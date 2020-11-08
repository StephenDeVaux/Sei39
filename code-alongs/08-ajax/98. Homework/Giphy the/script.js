let searchBtn = document.querySelector('button')
let resultsGrid = document.querySelector(".results")
let input = document.querySelector("input")
let apiKey = "?"

function search(event) {
    event.preventDefault();
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${input.value}&limit=10&api_key=${apiKey}`).then(handleResponse)
}

function handleResponse(response) {
    let gifUrls = response.data.data.map(gif => gif.images.original.url)
    removeAllGifs()
    gifUrls.forEach(url => {
        let gifDiv = document.createElement('img')
        gifDiv.src = url
        gifDiv.classList.add("gif")
        resultsGrid.append(gifDiv)
    })

}

function removeAllGifs() {
    while (resultsGrid.hasChildNodes()) {
        resultsGrid.removeChild(resultsGrid.firstChild)
    }
}

searchBtn.addEventListener("click", search)