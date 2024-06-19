
async function teste() {
    var total = await exibirResultado();
    console.log(total);
    return total;
}
teste();
document.querySelectorAll('.menu-list-link').forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();

        const materia = this.getAttribute('data-val');

        console.log(materia);

        openMateria(materia);

        async function values(){
            let media1 = await teste();
            console.log(media1);
        }

        values()
        // let media2 = exibirResultado().then(res2 => {console.log(res2[1])});
        // let media3 = exibirResultado().then(res3 => {console.log(res3[2])});
        // let media4 = exibirResultado().then(res4 => {console.log(res4[3])});
        // let media5 = exibirResultado().then(res5 => {console.log(res5[4])});

        // console.log(media1);
        renderChartADS(9, 2.5,5,7,8);
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
