console.log('Clent side script')

const channelSection = document.querySelectorAll('.selection')
channelSection.forEach( (channel) => {
    const playUrlLi = document.getElementById('playUrl')

    channel.addEventListener('click', (e) => {
    e.preventDefault()
    const url = channel.getAttribute('data-topic')
    var pause
    if (document.getElementById('playing')) {
        console.log("Stop Playing audio")
        pause = document.getElementById('playing')
        pause.pause()
        playUrlLi.removeChild(pause)
    } else {
        var li = document.createElement('audio')
        console.log("Start Playing audio")
         li.src = url
         li.play()
         li.id = "playing"
         li.type = "audio/mpeg"
         playUrlLi.appendChild(li)
    }
    
})
})




const fetchList = () => {
    fetch('http://localhost:3000/listchannel').then((response) => {
        response.json().then((data) => {
            if (data.errot) {
                console.log(data)
            } else {
                // Load the channel on UI
                    const channels = data.channel
                    channels.forEach((element) => {
                       //console.log(element)
                    });   
            }
        })
    })
}