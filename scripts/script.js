document.querySelectorAll('.menu-list-link').forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();

        const materia = this.getAttribute('data-val');

        console.log(materia)

        openMateria(materia)
    });
});

function openMateria(materia){
    let materiaURL = `./materias/${materia}.html`;
    let pathGithub = `TADS/${materia}.html`;

    fetch(materiaURL)
        .then(Response => {
            if(!Response.ok){
                throw new Error('Não há conexão com a internet')
            }
            return Response.text();
        })
        .then(data => {
            document.getElementById('main-content').load = data;
        })
        .catch(error => {
            console.error('Ocorreu um problema no link informado:', error);
        });
    return pathGithub
}
