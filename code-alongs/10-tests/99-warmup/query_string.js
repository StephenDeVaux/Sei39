
function parseQueryString(url) {
    let paramsArr = url.split("?")[1].split("&")
    let params = {}
    paramsArr.forEach((p) => {
        splitP = p.split("=")
        params[splitP[0]] = splitP[1]
    })
    console.log(params)
    return params
}


let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"
let url1 = "https://api.giphy.com/v1/gifs/search?q=cats&limit=10"

// parseQueryString(url)
// parseQueryString(url1)

let re = /ab+c/ //regular expression literal

// let re = new RegExp('ab+c'); //calling the constructr