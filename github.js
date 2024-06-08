let path = "materia";

exibirResultado();

async function exibirResultado() {
    let resultado = await getByPath(path);

    let url = resultado.data.download_url;

    let dados = await fetch(url)
        .then(
            res => res.json()
        );

    console.log(url, dados[0]["Sinto-me capaz de analisar e interpretar obras de arte contemporâneas, considerando seu contexto e mensagem?"]);

}

async function getByPath(path) {
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
        owner: "victorferrazms",
        repo: "EnemVerso",
        path: path
    })
}