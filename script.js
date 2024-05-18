import { graph_3a, graph_3b, graph_tads } from "./graficos.js"

const div1 = document.getElementById('grafico_3b')
const div2 = document.getElementById('grafico_3a')
const div3 = document.getElementById('grafico_tads')

const graph1 = echarts.init(div1)
const graph2 = echarts.init(div2)
const graph3 = echarts.init(div3)

graph1.setOption(graph_3b)
graph2.setOption(graph_3a)
graph3.setOption(graph_tads)