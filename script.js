// Função para abrir a navbar inserindo um style com 150px de largura, e empurrando main a 150px da esquerda
function openNav() {
    document.getElementById("left-navbar").style.width = "160px";
    // document.getElementById("main").style.marginLeft = "50px";
  }
  
//função para fechar a navbar zerando a largura da navbar e voltando o main para 0px da esquerda 
function closeNav() {
    document.getElementById("left-navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }