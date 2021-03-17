var paragrafos = document.getElementsByTagName('p') [0].innerText = "Homem Aranha 2"

window.onload = function() {
  let colorTrybe = document.getElementsByClassName('center-content')
  
  for(var i = 0; i < colorTrybe.length; i++) {
  	colorTrybe[i].style.color = 'rgb(76,164,109)';
  }
};