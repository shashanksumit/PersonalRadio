const fs = require('fs')

const loadChannels = () => {
    try {
        const dataBuffer = fs.readFileSync('./utils/channel.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

module.exports = loadChannels