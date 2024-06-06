let path = "TADS/quimica.json";

path_get(path)
async function path_get(path){
    let response = await path
    console.log( await executeRequest(response));
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