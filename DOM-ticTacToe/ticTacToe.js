var gameMarker = "X"
var gameMarker = "O"


function changeMarkerToX(){ 
    var gameMarker = "X";
    console.log("The X button was clicked!");
} 

function changeMarkerToO(){
    var gameMarker = "O";
    console.log("The O button was clicked!");
 }

 function placeMark(){ 
    
 }

 var buttons = document.querySelectorAll('.square');
 for (var button of buttons) {
  button.addEventListener('click', function() {
    console.log("click");
    this.innerHTML = gameMarker;
  });
}


//  var buttons = document.querySelectorAll('.square');
//  for (var button of buttons) {
//   button.addEventListener('click', function() {
//     console.log("click");
//     this.innerHTML = gameMarker;
//   });
// }


// // Query all button elements
// var buttons = document.querySelectorAll('.square');

// // Iterate through the buttons
// for (var button of buttons) {
//   // Add a 'click' event listener to each button
//   button.addEventListener('click', function() {
//     // Add a class to the clicked button
//     console.log("click");
//     this.innerHTML = gameMarker;
//   });
// }