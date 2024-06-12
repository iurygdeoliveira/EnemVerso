// eixo ética e uso político das TIC 
let questao1_eixo1 = [3, 5, 8, 5, 8];
let questao2_eixo1 = [2, 3, 2, 4, 18];
let questao3_eixo1 = [0, 0, 1, 0, 0];

// eixo sociedade da informação e impacto cultural
let questao1_eixo2 = [2, 2, 2, 6, 17];
let questao2_eixo2 = [3, 3, 7, 3, 13];
let questao3_eixo2 = [4, 5, 9, 2, 9];

// eixo relação entre internet e consumo
let questao1_eixo3 = [2, 1, 5, 7, 14];
let questao2_eixo3 = [0, 0, 1, 0, 0];
let questao3_eixo3 = [0, 0, 1, 0, 0];

// eixo impacto sociocultural das TIC
let questao1_eixo4 = [3, 5, 8, 3, 10];
let questao2_eixo4 = [2, 1, 7, 4, 15];
let questao3_eixo4 = [0, 0, 1, 0, 0];

// eixo acesso às novas tecnologias e TIC no mercado de trabalho
let questao1_eixo5 = [2, 1, 5, 4, 17];
let questao2_eixo5 = [4, 3, 9, 5, 8];
let questao3_eixo5 = [4, 5, 6, 4, 10];
let respondentes = 33

const mediaEixo1 = (calcularMedia(questao1_eixo1,respondentes) + calcularMedia(questao2_eixo1,respondentes) + calcularMedia(questao3_eixo1,respondentes)) / 3;


const mediaEixo2 = (calcularMedia(questao1_eixo2,respondentes) + calcularMedia(questao2_eixo2,respondentes) + calcularMedia(questao3_eixo2,respondentes)) / 3;

console.log(mediaEixo2)

const mediaEixo3=(calcularMedia(questao1_eixo3,respondentes)+
calcularMedia(questao2_eixo3,respondentes)+
calcularMedia(questao3_eixo3,respondentes))/3;

console.log(mediaEixo3)

const mediaEixo4=(calcularMedia(questao1_eixo4,respondentes)+
calcularMedia(questao2_eixo4,respondentes)+
calcularMedia(questao3_eixo4,respondentes))/3;

console.log(mediaEixo4)

const mediaEixo5=(calcularMedia(questao1_eixo5,respondentes)+
calcularMedia(questao2_eixo5,respondentes)+
calcularMedia(questao3_eixo5,respondentes))/3;

 console.log(mediaEixo5)

function calcularMedia(dados, respondentes){

  let somatoria = 0;
  for(let i=1 ; i<=5; i++){
    somatoria = somatoria + dados[i-1] *  i;
  }
  return somatoria/respondentes;
  }
export { mediaEixo1, mediaEixo2, mediaEixo3, mediaEixo4, mediaEixo5 }