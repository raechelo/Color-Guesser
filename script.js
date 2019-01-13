// VARIABLES
var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var winningColor = chooseColor();
var colorToggle = document.getElementById('heading-color-js');
var colorContainer = document.getElementById('container-js');
var errorMsg = document.getElementById('error-msg-js');
var headerBg = document.querySelector('.header-js');
var newGame = document.querySelector('.new-game');
var easyMode = document.getElementById('easy-mode-js');
var hardMode = document.getElementById('hard-mode-js');


// EVENT LISTENERS
newGame.addEventListener('click', startNewGame);
easyMode.addEventListener('click', changeMode)
hardMode.addEventListener('click', changeMode)
colorToggle.textContent = winningColor;


for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === winningColor) {
      alert('correct')
      colorChange();
      winningMsg();
    } else {
      alert('nope');
      losingMsg();
      this.style.backgroundColor = "#232323";
    }
  })
}

function colorChange() {
 squares.forEach(square => square.style.backgroundColor = winningColor)
}

function winningMsg() {
  errorMsg.style.visibility = 'visible';
  errorMsg.innerText = 'YOU GOT IT!';
  headerBg.style.background = winningColor;
}

function losingMsg() {
  errorMsg.style.visibility = 'visible';
  errorMsg.innerText = 'TRY AGAIN!'
}

function chooseColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function startNewGame() {
  location.reload();
}

function generateRandomColors(number) {
  var randomColorArr = [];
  for(var i = 0; i < number; i++) {
    randomColorArr.push(randomColor())
  }
  return randomColorArr;
}

function randomColor() {
  var redHue = Math.floor(Math.random() * 256);
  var greenHue = Math.floor(Math.random() * 256);
  var blueHue = Math.floor(Math.random() * 256);
  return `rgb(${redHue}, ${greenHue}, ${blueHue})`
}

function changeMode(event) {
  event.target.classList.add('selected');
  if (event.target.nextElementSibling.classList.contains('selected')) {
    event.target.classList.remove('selected');
    console.log('whoaaa');
  }
}


  
  //generate 3 new colors
  //pick one color from three
  //update pickedColor & three squares
  //hide 3 other squares
  
  // if (event.target.classList == 'no-select') {
  //   console.log('change1')
  //   event.target.classList.add('easy-select');
  // } else if (event.target.classList.includes('easy-select')) {
  //   console.log('change2')
  //   event.target.classList.add('no-select')