/**
 * Video Validations
 */
import prisma from '../prisma'
import { body } from 'express-validator'

export const createVideoRules = [
	body('title')
		.isString().withMessage('has to be a string').bail()
		.trim()
		.isLength({ min: 3 }).withMessage('has to be at least 3 chars long').bail()
		.custom(async (value) => {
			const video = await prisma.video.findFirst({ where: { title: value } })
			if (video) {
				return Promise.reject('title already exists in database')
			}
		}),

	body('url')
		.isURL().withMessage('has to be a valid URL').bail()
		.custom(async (value) => {
			const video = await prisma.video.findFirst({ where: { url: value } })
			if (video) {
				return Promise.reject('has to be a YouTube URL')
			}
		}).bail()
		.custom(async (value) => {
			if (!value.includes('youtube.com/watch')) {
				return Promise.reject('url already exists in database')
			}
		}),
]

export const updateVideoRules = [
	body('title')
		.optional()
		.isString().withMessage('has to be a string').bail()
		.trim()
		.isLength({ min: 3 }).withMessage('has to be at least 3 chars long').bail()
		.custom(async (value) => {
			const video = await prisma.video.findFirst({ where: { url: value } })
			if (video) {
				return Promise.reject('title already exists in database')
			}
		}),

	body('url')
		.optional()
		.isURL().withMessage('has to be a valid URL').bail()
		.custom(async (value) => {
			const video = await prisma.video.findFirst({ where: { url: value } })
			if (video) {
				return Promise.reject('url already exists in database')
			}
		}).bail()
		.custom(async (value) => {
			if (!value.includes('youtube.com/watch')) {
				return Promise.reject('has to be a YouTube URL')
			}
		}),
]