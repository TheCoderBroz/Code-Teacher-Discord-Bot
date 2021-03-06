const shortid = require('shortid')
let musicList = []

const addToList = (url, user) => {
    const id = shortid.generate()

    musicList.push({
        id: id,
        url: url,
    })

    console.log(musicList)
}

const removeFirstTrack = () => {
    musicList = musicList.splice(1)

    return true
}

const getFirstTrack = () => {
    return musicList[0]
}

const isListEmpty = () => {
    if (musicList.length > 0) {
        return false
    } else {
        return true
    }
}

const clearList = () => {
    musicList = []
}

module.exports.clearTrackList = clearList
module.exports.addTrackToList = addToList
module.exports.removeFirstTrack = removeFirstTrack
module.exports.getFirstTrack = getFirstTrack
module.exports.isMusicListEmpty = isListEmpty