let path = "TADS/Filosofia.json";

exibirResultado();

async function exibirResultado() {
    let resultado = await getByPath(path);

    let url = resultado.data.download_url;

    let dados = await fetch(url)
        .then(
            res => res.json()
        );

    console.log(url, dados [27] "Sinto que preciso de mais conhecimento para entender plenamente a relação entre filosofia e arte ?");

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
        owner: "Hiagoribas",
        repo: "EnemVerso_Data",
        path: path
    })
}