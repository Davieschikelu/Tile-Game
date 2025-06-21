let start = document.getElementById("start")
let movesMade = document.getElementById("moves")
let numGuess = document.getElementById("numGuess")
let points = document.getElementById("points")
let tGrid = document.getElementById("tGrid")
let clickArea = document.getElementById("clickArea")
let values = Array.from({length: 24},(_,i) => i + 1);
let score = 0;
let currentIndex = 0;
let targetValueToGuess = 0;
numGuess.innerHTML ="0"
// start.addEventListener("click",startGame)
movesMade.innerHTML = `Moves Made: ${currentIndex}`
points.innerHTML = `Points: ${score}`

 function startGame() {
clickArea.className = "grid grid-cols-2"
clickArea.innerHTML = `<button onclick="restartGame()" class="text-center border-r-1  p-2 cursor pointer border-white hover:bg-sky-500 transition delay ease-in-out text-white">Restart Game</button>
<button onclick="playAgain()" class="text-center border-l-1  p-2 border-gray-300 cursor pointer text-white hover:bg-sky-500 transition delay ease-in-out">Play Again</button>`
let randomArrayIndex = Math.floor(Math.random() * values.length);
    targetValueToGuess = values[randomArrayIndex]; 
    numGuess.innerHTML = targetValueToGuess;
showTile()
 }

function showTile(){
    tGrid.innerHTML = ""
    values.sort(() => Math.random() - 0.5);
    console.log(values);
let tileElements = values.map(element => {
    let tileElement = document.createElement("div")
     tileElement.className = "p-4 cursor-pointer bg-white text-white border-1 border-gray-100"
     tileElement.innerHTML = `<p class="text-center font-semibold">${element}</p>`
     tileElement.onclick = () => {
      tileElement.classList.remove("text-white")
      tileElement.classList.add("text-sky-500")
      currentIndex++
      movesMade.innerHTML = `Moves Made: ${currentIndex}`
      selectAnswer(element,targetValueToGuess)
     }
     tileElement.onmouseout = function change(){
        tileElement.classList.remove("bg-gray-200")
        tileElement.classList.add("text-white")
     }
     return tileElement;
})
// console.log(tileElements);
tGrid.append(...tileElements)
 }
let selected = null;
 function selectAnswer(targetValueToGuess,correct){
 selected = targetValueToGuess === correct ? 1 : 0;
 if(correct === targetValueToGuess){
    // currentIndex = 0
    score++
    movesMade.innerHTML = `Moves Made: ${currentIndex}`
    points.innerHTML = `Points: ${score}`
    tGrid.innerHTML = ""
    // showTile()
 }
 }
function nextQuestion() {
      if (selected !== null) score += selected;
      currentIndex++;
      selected = null;
      points.innerHTML = `Points: ${score}`
      movesMade.innerHTML = `Moves Made: ${currentIndex}`
      selectAnswer()
    }
 function restartGame(){
    score = 0;
    currentIndex = 0;
    movesMade.innerHTML = `Moves Made: ${currentIndex}`
    points.innerHTML = `Points: ${score}`
    startGame()
 }
 function playAgain(){
     currentIndex = 0;
    // score++
    movesMade.innerHTML = `Moves Made: ${currentIndex}`
    // points.innerHTML = `Points: ${score++}`
    startGame()
 }
 