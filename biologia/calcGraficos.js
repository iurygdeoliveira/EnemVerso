// eixo biologia celular e molecular  
let questao1_eixo1 = [5, 12, 5, 9, 2];
let questao2_eixo1 = [4, 11, 7, 7, 4];
let questao3_eixo1 = [4, 9, 12, 2, 6];

// eixo ecologia e meio ambiente
let questao1_eixo2 = [3, 4, 6, 11, 9];
let questao2_eixo2 = [4, 4, 5, 14, 6];
let questao3_eixo2 = [9, 12, 8, 2, 2];

// eixo funções genética e evolução
let questao1_eixo3 = [2, 6, 16, 5, 4];
let questao2_eixo3 = [5, 14, 7, 3, 4];
let questao3_eixo3 = [7, 12, 10, 2, 2];

// eixo anatomia e fisiologia humana
let questao1_eixo4 = [0, 11, 6, 7, 9];
let questao2_eixo4 = [6, 8, 12, 3, 4];
let questao3_eixo4 = [6, 8, 9, 4, 6];

// eixo química ambiental
let questao1_eixo5 = [4, 4, 8, 6, 11];
let questao2_eixo5 = [3, 5, 1, 7, 17];
let questao3_eixo5 = [13, 9, 5, 1, 5];

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