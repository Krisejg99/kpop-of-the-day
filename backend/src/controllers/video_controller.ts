/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import prisma from '../prisma'

// Create a new debug instance
const debug = Debug('kpop-of-the-day:video_controller')

/**
 * Get all videos
 */
export const index = async (req: Request, res: Response) => {
	try {
		const videos = await prisma.video.findMany()

		res.send({
			status: "success",
			data: videos,
		})
	}
	catch (err) {
		
	}
}

/**
 * Get a single video
 */
export const show = async (req: Request, res: Response) => {
	const videoId = Number(req.params.videoId)
	try {
		const video = await prisma.video.findUnique({ where: { id: videoId } })

		res.send({
			status: "success",
			data: video,
		})
	}
	catch (err) {
		
	}
}

/**
 * Create a video
 */
export const store = async (req: Request, res: Response) => {
}

/**
 * Update a video
 */
export const update = async (req: Request, res: Response) => {
}

/**
 * Delete a video
 */
export const destroy = async (req: Request, res: Response) => {
}
