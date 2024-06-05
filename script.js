import { createGraphics } from "./createGraphics.js"

async function setGraphics ({ graph_3a, graph_3b, graph_tads }) {

    const div1 = document.getElementById('grafico_3b')
    const div2 = document.getElementById('grafico_3a')
    const div3 = document.getElementById('grafico_tads')

    const graph1 = echarts.init(div1)
    const graph2 = echarts.init(div2)
    const graph3 = echarts.init(div3)

    graph1.setOption(graph_3b)
    graph2.setOption(graph_3a)
    graph3.setOption(graph_tads)

}

await setGraphics(await createGraphics('linguaPortuguesa'))

const subButtons = document.getElementsByClassName('subject')
for (let b = 0; b < subButtons.length; b++) {

    subButtons.item(b).addEventListener('click', async (event) => {

        const subject = document.getElementById('subject')
        subject.innerHTML = event.target.innerHTML

        const buttonId = event.target.id
        setGraphics(await createGraphics(buttonId))

    })

}