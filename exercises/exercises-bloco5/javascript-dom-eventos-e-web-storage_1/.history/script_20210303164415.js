var paragrafos = document.getElementsByTagName('p') [0].innerText = "Homem Aranha 2"

window.onload = function() {
	var elementos = document.getElementsByClassName('exemplo');
  
  elementos[2].style.color = "#ff0";
  
  for(var i = 0; i < elementos.length; i++) {
  	elementos[i].style.color = "red";
  }
};