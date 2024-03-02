// Função para abrir a navbar inserindo um style com 150px de largura e 
function openNav() {
    document.getElementById("left-navbar").style.width = "150px";
    document.getElementById("conteiner").style.backgroundColor = "rgba(1,1,1,0.1)";
  }
  
//função para fechar a navbar zerando a largura da navbar e voltando o main para 0px da esquerda 
function closeNav() {
    document.getElementById("left-navbar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }