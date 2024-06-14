let path = "TADS/espanhol.json";

exibirResultado();  

async function exibirResultado() {
    let resultado = await getByPath(path);

    let url = resultado.data.download_url;

    let dados = await fetch(url)
        .then(
            res => res.json()
        );

    console.log(url, dados[0]["Sinto-me confiante ao interpretar diferentes formatos de textos na língua espanhola, como parágrafos, quadrinhos ou comerciais?"]);

}

async function getByPath(path) {
    return await executeRequest(path);
}

//console.log(await executeRequest('TADS/espanhol.json'));

async function executeRequest(path) {

    let github = await import('https://cdn.skypack.dev/@octokit/request');

    return await github.request({
        method: "GET",
        url: '/repos/{owner}/{repo}/contents/{path}',
        headers: {
            authorization: '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',
        },
        owner: "DCarthur",
        repo: "EnemVerso_Data",
        path: path
    })
}