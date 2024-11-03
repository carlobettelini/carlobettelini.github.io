// Generate UUID to produce unique IDs
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'axxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Set the pause button to display:none by default
var tempArray = document.querySelectorAll(".fa-pause")
tempArray.forEach((item) => {
    item.style.display = "none"
});

// Update the progress bar of all videos
const videoContainers = document.querySelectorAll(".container")
videoContainers.forEach((item) => {
    // Generate unique ID
    const uniqueID = generateUUID();
    item.setAttribute('id', uniqueID)

    var video = item.querySelector("#video")
    video.addEventListener("timeupdate", () => {
        let curr = (video.currentTime / video.duration) * 100
        if (video.ended) {
            var play = item.querySelector(".fa-play")
            var pause = item.querySelector(".fa-pause")
            play.style.display = "block"
            pause.style.display = "none"
        }

        item.querySelector('.inner').style.width = `${curr}%`
    })
});

// Pause or play the video
const play = (e) => {
    let srcElement = e.srcElement
    let id = srcElement.parentElement.parentElement.parentElement.id
    let idString = "[id=" + id + "]"
    const container = document.querySelector(idString)
    const video = container.querySelector("video")

    // Condition when to play a video
    if (video.paused) {
        // Pause all other videos
        var tempArray = document.querySelectorAll("video")
        tempArray.forEach((item) => {
            item.pause()
        });

        // Play selected video
        container.querySelector(".fa-play").style.display = "none"
        container.querySelector(".fa-pause").style.display = "block"
        video.play()

    }
    else {
        // Pause selected video
        container.querySelector(".fa-play").style.display = "block"
        container.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}

// Trigger fullscreen
const fullScreen = (e) => {
    let srcElement = e.srcElement
    let id = srcElement.parentElement.parentElement.parentElement.id
    let idString = "[id=" + id + "]"
    const container = document.querySelector(idString)
    const video = container.querySelector("video")
    e.preventDefault()
    video.requestFullscreen()
}

// Download the video
const download = (e) => {
    let srcElement = e.srcElement
    let id = srcElement.parentElement.parentElement.parentElement.id
    let idString = "[id=" + id + "]"
    const container = document.querySelector(idString)
    const video = container.querySelector("video")
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
// Rewind the current time
const rewind = (e) => {
    let srcElement = e.srcElement
    let id = srcElement.parentElement.parentElement.parentElement.id
    let idString = "[id=" + id + "]"
    const container = document.querySelector(idString)
    const video = container.querySelector("video")
    video.currentTime = video.currentTime - ((video.duration / 100) * 5)
}
// Forward the current time
const forward = (e) => {
    let srcElement = e.srcElement
    let id = srcElement.parentElement.parentElement.parentElement.id
    let idString = "[id=" + id + "]"
    const container = document.querySelector(idString)
    const video = container.querySelector("video")
    video.currentTime = video.currentTime + ((video.duration / 100) * 5)
}