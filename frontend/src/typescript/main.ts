import { videos } from './videos'

const video = videos[2]

document.querySelector('#video-title')!.innerHTML = video.title

const lastSlash = video.url.lastIndexOf('/')
const equalSign = video.url.lastIndexOf('=') + 1
const UrlStart = video.url.slice(0, lastSlash + 1)
const UrlEnding = video.url.slice(equalSign)
const embeddedVideoURL = `${UrlStart}embed/${UrlEnding}`

// const embeddedIframe = `
// 	<iframe
// 		width="100%"
// 		height="100%"
// 		src=${embeddedVideoURL}
// 		title="YouTube video player"
// 		frameborder="0"
// 		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 		allowfullscreen
// 	</iframe>
// `
// document.querySelector('#video-player')!.innerHTML = embeddedIframe
