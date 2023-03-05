const fs = require('fs')
const path = require('path')

const getInfoModel = (jsonFile) => {
    const filePath = path.join (__dirname, "..", "models", `${jsonFile}.json`)
    const readFile = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(readFile)
}

console.log(getInfoModel("users"))
