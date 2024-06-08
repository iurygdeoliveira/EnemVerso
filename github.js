import { request } from 'https://cdn.skypack.dev/@octokit/request';

console.log(await (executeRequest('TADS/linguaportuguesa.json')));

export async function executeRequest(path) {
    return await request({
        method: "GET",
        url: `/repos/Theo-Magno/EnemVerso-Data/contents/${path}`,
        headers: {
            authorization: 'Bearer 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',
        },
        owner: "Theo-Magno",
        repo: "EnemVerso_Data",
        path: path
    });
}
