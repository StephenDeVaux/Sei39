var elems = document.querySelectorAll('li')
var btn = document.querySelector('button')

function handleClick(event) {
    event.target.classList.toggle("completed-item")
}

for (i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', handleClick)
}

btn.addEventListener("click", function() {
    for (i = 0; i < elems.length; i++) {
        elems[i].classList.remove('completed-item')
    }
})





/////////////////Cube playing around

var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener('change', changeSide);

var scrollBox = document.querySelector('.box-move')
scrollBox.addEventListener('mousemove', e => {
    let blockSize = 360
    let divRatio = 2
    let y = e.offsetX / divRatio - blockSize / divRatio / 2
    let x = -e.offsetY / divRatio + blockSize / divRatio / 2
        // console.log(`x= ${e.offsetX}  y= ${e.offsetY}`)
    cube.style.transform = `translateZ(-200px) rotateY( ${y}deg) rotateX(${x}deg)`
})