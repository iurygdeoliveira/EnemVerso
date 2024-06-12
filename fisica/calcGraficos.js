// eixo eletrodinâmica
let questao1_eixo1 = [16, 10, 3, 0, 4];
let questao2_eixo1 = [12, 14, 2, 4, 1];
let questao3_eixo1 = [11, 7, 9, 1, 5];

// eixo termologia
let questao1_eixo2 = [5, 9, 6, 6, 7];
let questao2_eixo2 = [2, 7, 6, 8, 10];
let questao3_eixo2 = [8, 5, 10, 4, 6];

// eixo ondulatória
let questao1_eixo3 = [17, 8, 6, 1, 1];
let questao2_eixo3 = [15, 11, 6, 0, 1];
let questao3_eixo3 = [19, 6, 4, 2, 2];

// eixo cinemática
let questao1_eixo4 = [7, 9, 8, 5, 4];
let questao2_eixo4 = [8, 11, 1, 12, 1];
let questao3_eixo4 = [5, 6, 10, 4, 8];

// eixo óptica
let questao1_eixo5 = [8, 10, 10, 2, 3];
let questao2_eixo5 = [9, 8, 8, 7, 1];
let questao3_eixo5 = [9, 10, 6, 7, 1];

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