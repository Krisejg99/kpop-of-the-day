import { getVideos } from './videos'

const displayVideo = async () => {
	const videos = await getVideos()

	if (videos.status !== 'success') {
		document.querySelector('#')!.classList.remove('hide')
	}

	const video = videos.data[1]

	document.querySelector('#video-title')!.innerHTML = video.title

	const lastSlash = video.url.lastIndexOf('/')
	const equalSign = video.url.lastIndexOf('=') + 1
	const UrlStart = video.url.slice(0, lastSlash + 1)
	const UrlEnding = video.url.slice(equalSign)
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