$(document).ready(function() {     

  function casasIguais(x, y, z) {
    var valorBotaoX = $("#btn" + x).text();
    var valorBotaoY = $("#btn" + y).text();
    var valorBotaoZ = $("#btn" + z).text();            
           
    if ((valorBotaoX == valorBotaoY) && (valorBotaoY == valorBotaoZ) && (valorBotaoX  != "none" &&  valorBotaoX  != "")) {
      if(valorBotaoX=="X" && valorBotaoY=="X" && valorBotaoZ=="X")
        vencedor = "Jogador 1";               
      else
        vencedor = "Jogador 2";
        return true;
      }else {
        return false;
      }
  }

  function verificarVencedor() {
    if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
      casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
      casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
    ) {      
      $("#jogador").text("O " + vencedor + " venceu");                
      $(".botao").prop("disabled",true);    
    }
  }
                 
  var vez = 1;
        
  $(".btn").click(function() {
    var valorBotao = $(this).text();
    if (valorBotao == "none" || valorBotao == "") {             
      if (vez == 1) {
        $(this)
          .text("X")
          .css("color","#EEDA76");
          jogador = "Jogador 2";
          vez=2;
      } else {
        $(this)
          .text("O")
          .css("color","#39ABD9");
        jogador = "Jogador 1";
        vez=1;
      }            
      $("#jogador").text("É a vez do " + jogador);
      verificarVencedor();
    }
  });
});
        
$("#jogador").text("É a vez do jogador 1");        
      
$(".clean").click(function() {
  var x;
  for(x=1 ; x<=9 ; x++) {
    $("#btn"+x).text("");
    $("#jogador").text("É a vez do jogador 1");
    $(".botao").prop("disabled",false);   
  }
});
