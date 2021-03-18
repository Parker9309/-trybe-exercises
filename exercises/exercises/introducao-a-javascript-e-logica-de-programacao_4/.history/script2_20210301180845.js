function checkPalindrome(str) {     
  var direita = [];
  for(var i = 0; i<str.length; i++){      
      direita.unshift(str.charAt(i)); 
      }
      console.log(direita);
  var esquerda = [];
  for (var j=str.length-1; j>=0; j--){
      esquerda.push(str.charAt(j));
  }
      console.log(esquerda);
      };