const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
        ]

function theBeatlesPlay(musicians, instruments) {
  // creates an empty array
  var newArray =[]
  // creates a variable with an empty string
  var musicianAndInstrument = ""
  // adds musician name at index i, plays, and instrument at index i, to variable musicianAndInstrument
  for (var i = 0; i < 4; i++) {
    musicianAndInstrument = musicians[i] + " " + "plays" + " " + instruments[i]
    // converts musicianAndInstrument to a string
    musicianAndInstrument.toString()
    // adds value of musicianAndInstrument to the end of the array newArray
    newArray.push(musicianAndInstrument)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  let n = 0
  // creates an empty array
  let newFacts = []
  // creates a variable with an empty string
  let excitedFacts = ""
  while (n < facts.length) {
      // adds !!! to the end of fact item at index n
      excitedFacts = facts[n] + "!!!"
      // converts excitedFacts to a string
      excitedFacts.toString()
      // adds excitedFacts to the end of the array newFacts
      newFacts.push(excitedFacts)
      // increments n by one
      n++;
    }
    // returns a new array with !!! at the end of each fact
    return newFacts
}

function iLoveTheBeatles(number) {
// creates an empty array
let love = []
do {
    // adds "I love the Beatles!" to the end of love
    love.push("I love the Beatles!")
    // increments the passed in number by 1
    number++
    // number must be less than 15 for the loop to execute
} while (number < 15)
return love
}

theBeatlesPlay(musicians, instruments)
johnLennonFacts(facts)
iLoveTheBeatles(5)