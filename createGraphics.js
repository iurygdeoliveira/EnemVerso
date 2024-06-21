import { readJSONData } from "./data/readJSONData.js"
import { subjects3a, subjects3b, subjectsTADS, topics } from "./data/otherData.js"

export async function createGraphics (reqSubject) {

  const sliceStartA = subjects3a[reqSubject][0]
  const sliceEndA = subjects3a[reqSubject][1]
  const sliceStartB = subjects3b[reqSubject][0]
  const sliceEndB = subjects3b[reqSubject][1]
  const sliceStartTADS = subjectsTADS[reqSubject][0]
  const sliceEndTADS = subjectsTADS[reqSubject][1]

  const avgs3b = await readJSONData(`data/3B/${reqSubject}_3B.json`, sliceStartB, sliceEndB)
  const avgs3a = await readJSONData(`data/3A/${reqSubject}_3A.json`, sliceStartA, sliceEndA)
  const avgsTADS = await readJSONData(`data/TADS/${reqSubject}_TADS.json`, sliceStartTADS, sliceEndTADS)

  const graph_3b = {
    title: {
      text: '3º B'
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: topics[reqSubject][0], max: 5 },
        { name: topics[reqSubject][1], max: 5 },
        { name: topics[reqSubject][2], max: 5 },
        { name: topics[reqSubject][3], max: 5 },
        { name: topics[reqSubject][4], max: 5 }
      ]
    },
    series: [
      {
        name: reqSubject,
        type: 'radar',
        data: [
          {
            value: avgs3b,
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  }

  const graph_3a = {

    title: {
      text: '3º A'
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: topics[reqSubject][0], max: 5 },
        { name: topics[reqSubject][1], max: 5 },
        { name: topics[reqSubject][2], max: 5 },
        { name: topics[reqSubject][3], max: 5 },
        { name: topics[reqSubject][4], max: 5 }
      ]
    },
    series: [
      {
        name: reqSubject,
        type: 'radar',
        data: [
          {
            value: avgs3a,
            name: 'Allocated Budget'
          }
        ]
      }
    ]

  }

  const graph_tads = {

    title: {
      text: 'TADS'
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: topics[reqSubject][0], max: 5 },
        { name: topics[reqSubject][1], max: 5 },
        { name: topics[reqSubject][2], max: 5 },
        { name: topics[reqSubject][3], max: 5 },
        { name: topics[reqSubject][4], max: 5 }
      ]
    },
    series: [
      {
        name: reqSubject,
        type: 'radar',
        data: [
          {
            value: avgsTADS,
            name: 'Allocated Budget'
          }
        ]
      }
    ]

  }

  return {graph_3a, graph_3b, graph_tads}

}