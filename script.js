// VARIABLES

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll('.square');
var winningColor = colors[3];
var colorToggle = document.getElementById('heading-color-js');
var colorContainer = document.getElementById('container-js');
var errorMsg = document.getElementById('error-msg-js')


// EVENT LISTENERS
// colorContainer.addEventListener('click', deleteColor)

colorToggle.textContent = winningColor;


for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === winningColor) {
      alert('correct')
      squares.style.backgroundColor = clickedColor;
    } else {
      alert('nope');
      this.style.backgroundColor = "#232323";

    }
  })
}

// function deleteColor() {
//   if (clickedColor !== winningColor) {
//     this.remove()
//   }
// }

// squares.forEach(squares => squares.style.backgroundColor = colors)

// function colorCompare(e) {
//   if (e.target.className === 'square') {
//     var clickedColor = this.style.backgroundColor;
//     console.log(clickedColor)
//     }
// }
