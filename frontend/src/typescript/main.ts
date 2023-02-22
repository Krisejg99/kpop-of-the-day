import { getVideos } from './videos'

const displayVideo = async () => {
	const videos = await getVideos()

	if (videos.status !== 'success') return document.querySelector('#fetch-failed')!.classList.remove('hide')

	const video = videos.data[1]

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

displayVideo()