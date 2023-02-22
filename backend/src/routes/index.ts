import express from "express"
import videoRouter from './video_router'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})

/**
 * /videos
 */
router.use('/videos', videoRouter)

export default router
