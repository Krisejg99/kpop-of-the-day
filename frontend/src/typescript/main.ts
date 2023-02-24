import { getVideos } from './videos'

const displayVideo = async () => {
	const videos = await getVideos()

	if (videos.status !== 'success') return document.querySelector('#fetch-failed')!.classList.remove('hide')

    // 1970 Jan 1 //                  // sec   min  hour  day //
	const today = Math.floor(Date.now() / 1000 / 60 / 60 / 24)
    console.log(today, 'days sisnce 1970 Jan 1')

    // 'startDate' will be the value of 'today' when the app will deploy ex (27954221)
    // declare when lauching app
    const startDate = 19412

    const videoIndex = today - startDate

    try {
        const video = videos.data[videoIndex]

        document.querySelector('#video-title')!.innerHTML = video.title

        const UrlStart = video.url.slice(0, video.url.lastIndexOf('/') + 1)
        const UrlEnding = video.url.slice(video.url.lastIndexOf('=') + 1)
        const embeddedVideoURL = `${UrlStart}embed/${UrlEnding}`
    
        document.querySelector('#video-player')!.innerHTML = `
            <iframe
                width="100%"
                height="100%"
                src=${embeddedVideoURL}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            </iframe>
        `
    }
    catch (err) {
        console.log(`Can't find index ${videoIndex} in video array`)
    }
}

displayVideo()