export const getVideos = async () => {
	const res = await fetch('http://localhost:3000/videos')
	return res.json()
}