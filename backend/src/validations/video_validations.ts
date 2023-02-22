/**
 * Video Validations
 */
import { body } from 'express-validator'

export const createVideoRules = [
	body('title')
		.isString().withMessage('has to be a string').bail()
		.trim()
		.isLength({ min: 3 }).withMessage('has to be at least 3 chars long'),

	body('url')
		.isURL().withMessage('has to be a valid URL').bail()
		.custom(async (value) => {
			if (!value.includes('youtube.com/watch')) {
				return Promise.reject('has to be a YouTube URL')
			}
		})
]