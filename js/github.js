let path = "TADS/artes.json";

executar();

async function executar() {
    let url = await obterDownloadUrl();    
    let fileDownload = await downloadFile(url);
    
    console.log(fileDownload[0]["Carimbo de data/hora"]);
}

async function downloadFile(url) {
    return await fetch(url)
        .then(
            res => res.json()
        );
}

async function obterDownloadUrl() {
    let resultado = await getByPath(path);
    return resultado.data.download_url;
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
        owner: "vilaJJ",
        repo: "EnemVerso-Data",
        path: path
    });
}