document.querySelectorAll('.menu-list-link').forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();

        const materia = this.getAttribute('data-val');

        console.log(materia);

        openMateria(materia);

        loadDataMateria(materia);
    });
});


function openMateria(materia){
    switch (materia) {
        case 'quimica':
            document.getElementById('main-content').innerHTML = returnQuimica();
            break;

        default:
            break;
    }    
}
