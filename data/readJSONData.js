export async function readJSONData(path = '', sliceStart, sliceEnd) {

  return await fetch(path)
  .then(async res => {
      
    const file = await res.json()

    let fileValues = []

    for (const person of file) {
      fileValues.push(Object.values(person).slice(sliceStart, sliceEnd))
    }

    let questionsAvg = []

    let i = 0
    while (i < 15) {
        
      let qAvg = 0

      fileValues.forEach((val) => {

        qAvg += parseInt(val[i])/fileValues.length

      })
      questionsAvg.push(qAvg)

      i++

    }

    let topicsAvg = []

    for(let i = 0; i < 15; i+=3) {

      topicsAvg.push((questionsAvg[i] + questionsAvg[i+1] + questionsAvg[i+2])/3)

    }

    return topicsAvg

  })
  .catch(json => console.log(json))

}