import { carregarGrafico } from './assets/charts/grafico.js';

fetch('assets/charts/materias.json')
    .then(response => response.json())
    .then(materiasData => {
        const materias = materiasData.materias;

        document.querySelectorAll('.subject-link').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Evitar o comportamento padrão do link
                const selectedSubject = event.target.getAttribute('data-subject');
                const materia = materias.find(m => m.nome.toLowerCase().includes(selectedSubject.toLowerCase()));

                if (materia) {
                    carregarGrafico(materia);
                }
            });
        });

        
        // Carregar o gráfico da primeira matéria por padrão
        carregarGrafico(materias[0]);
    })
    .catch(error => {
        console.error('Erro ao carregar materias.json:', error);
    });
