// If/else example
function forLoop(array) {
    for (let i = 0; i < 25; i++) {
        if (i == 1) {
            array.push("I am 1 strange loop.")
        } else {
            array.push(`I am ${i} strange loops.`)
        }
    }
    return array
}
// While loop example
function whileLoop(number) {
    let countdown = number
    while (countdown > 0) {
        console.log(--countdown);
    }
    return "done"
}

var i = 0
// Do while loop example
function doWhileLoop(num) {
  function incrementVariable() {
    i = i + 1;
    return i;
  } do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= num);
}

forLoop([])
whileLoop(80)
doWhileLoop(10)
doWhileLoop(0)
