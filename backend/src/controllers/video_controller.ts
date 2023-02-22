/**
 * Controller Template
 */
import Debug from 'debug'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
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
		res.status(500).send({
			status: "error",
			message: "Could not get videos in database",
		})
	}
}

/**
 * Get a single video
 */
export const show = async (req: Request, res: Response) => {
	const videoId = Number(req.params.videoId)
	try {
		const video = await prisma.video.findUnique({ where: { id: videoId } })

		if (!video) {
			return res.status(404).send({
				status: "fail",
				message: `Could not find vidoe with id ${videoId}`,
			})
		}

		res.send({
			status: "success",
			data: video,
		})
	}
	catch (err) {
		res.status(500).send({
			status: "error",
			message: "Could not get video in database",
		})
	}
}

/**
 * Create a video
 */
export const store = async (req: Request, res: Response) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array()
		})
	}

	const { title, url } = matchedData(req)

	try {
		const video = await prisma.video.create({
			data: {
				title,
				url,
			},
		})

		res.send({
			status: "success",
			data: video,
		})
	}
	catch (err) {
		res.status(500).send({
			status: "error",
			message: "Could not create video in database",
		})
	}
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
