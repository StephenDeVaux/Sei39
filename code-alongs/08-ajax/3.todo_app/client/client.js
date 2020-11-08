console.log("hello there")

let ul = document.querySelector('ul')
let input = document.querySelector('input')
let addBtn = document.querySelector('button')


function handleResponse(res) {
    document.querySelectorAll('li').forEach(li => {
            li.remove()
        })
        // console.log(res.data)
    res.data.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item.content
        ul.append(li)
    })
}


addBtn.addEventListener('click', event => {
    event.preventDefault() //Stops form refresh from happening!

    axios.get(`/add/${input.value}`)
    fetchItemsList(0)

})

function fetchItemsList() {
    axios.get('/api/todo').then(handleResponse)

}

fetchItemsList()