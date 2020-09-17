let counter = 0;
let multiple = 3;
let start = 100;
let end = 200;

while (counter * multiple < end) {
    if (counter * multiple > start) {
        // console.log(counter * multiple);
    }
    counter++;
}
//Using the modulus is probably the most elegant solution
counter = 100
while (counter < end) {
    if (counter % 3 === 0) {
        console.log(counter);
    }
    counter++
}