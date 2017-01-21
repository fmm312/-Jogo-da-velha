 $(document).ready(function() {
            
        //atribuicao de valores aos botoes atraves de parametros        
          function casasIguais(x, y, z) {            
            var valorBotaoX = $("#btn" + x).text();
            var valorBotaoY = $("#btn" + y).text();
            var valorBotaoZ = $("#btn" + z).text();            
           
            
            if ((valorBotaoX == valorBotaoY) && (valorBotaoY == valorBotaoZ) && (valorBotaoX  != "none" &&          valorBotaoX  != "")) {
                if(valorBotaoX=="X" && valorBotaoY=="X" && valorBotaoZ=="X")
                    vencedor = player1;               
                else
                    vencedor = player2;
                return true;
            }else {
             return false;
            }
          }
            
        //Verifica vencedor        
          function verificarVencedor() {
            if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
              casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
              casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ) {
              $("#jogador").text(vencedor + " wins !");                
              $(".botao").prop("disabled",true);    
                
            }
          }
            
            
        //coloca X ou O quando o botao é clicado          
            var vez = 1;
            
            $(".btn").click(function() {
            var valorBotao = $(this).text();
            if (valorBotao == "none" || valorBotao == "") {             
              if (vez == 1) {
                $(this)
                    .text("X")
                    .css("color","#EEDA76");
                jogador = player2;
                vez=2;
              } else {
                $(this)
                    .text("O")
                    .css("color","#39ABD9");
                jogador = player1;
                vez=1;
              }
                
              $("#jogador").text(jogador + " is preparing the move...");               
               
              verificarVencedor();
            }
          });
        });
        
                        
    //Efeitos para mostrar tabuleiro ao clicar em Play 
      $(".play").click(function(){
          player1 = $(".jogador1").val();
          player2 = $(".jogador2").val();
          
          if($(".jogador1").val()==""){
              alert("O jogador 1 deve informar o nome");
              return false;
          
          }else if($(".jogador2").val()==""){
              alert("O jogador 2 deve informar o nome");
              return false;
          
          }else{
              $("#jogador").text(player1 + " is preparing the move...");
              $(this).css("display","none");
              $(".formulario").css("display","none");             
              $(".cliqueComecar").css("display","none");
              $(".titulo").css("display","none");
              $(".container-fluid").fadeIn("3000");
              $(".legenda1, .legenda2, .x, .o").fadeIn("3000");             
              $(".legenda1").text(player1 + " = ");
              $(".legenda2").text(player2 + " = ");              
              
              return true;
          }
      });  
       
        
        
    //Limpar tabuleiro        
      $(".clean").click(function(){
          var x;
          for(x=1 ; x<=9 ; x++){
             $("#btn"+x).text("");
             $("#jogador").text(player1 + " is preparing the move...");
             $(".botao").prop("disabled",false);   
          }
      });
        
        
    //Resetar game
        $(".newGame").click(function(){
            location.reload();
        });
        
