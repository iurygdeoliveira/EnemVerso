let path = "TADS/quimica.json"

consoleGetData(path)

exibirResultado()
async function exibirResultado() {
    let resultado = await getData(path);

    let url = resultado.data.download_url;
    
    let dados = await fetch(url)
        .then(
            res => res.json()
        );
    
    console.log(url, dados);
}

async function getData(path){
    return await executeRequest(path);
}

async function executeRequest(path) {

    let github = await import('https://cdn.skypack.dev/@octokit/request');

    return await github.request({
        method: "GET",
        url: '/repos/{owner}/{repo}/contents/{path}',
        headers: {
            authorization: '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',
        },
        owner: "jhonloll",
        repo: "EnemVerso-Data",
        path: path
    })
}

async function consoleGetData(path){
    console.log( await getData(path))
}