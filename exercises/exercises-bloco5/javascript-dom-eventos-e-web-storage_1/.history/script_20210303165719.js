var paragrafos = document.getElementsByTagName('p') [0].innerText = "Homem Aranha 2"

 = function() {
  let colorTrybe = document.querySelector('.main-content')
  
  for(var i = 0; i < colorTrybe.length; i++) {
  	colorTrybe[i].style.color = rgb(76,164,109);
  }
};