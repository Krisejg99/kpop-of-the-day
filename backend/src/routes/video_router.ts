/**
 * Router Template
 */
import express from 'express'
import { body } from 'express-validator'
import { index, show, store, update, destroy } from '../controllers/video_controller'
import { createVideoRules } from '../validations/video_validations'
const router = express.Router()

/**
 * GET /videos
 */
router.get('/', index)

/**
 * GET /videos/:videoId
 */
router.get('/:videoId', show)

/**
 * POST /videos
 */
router.post('/', createVideoRules, store)

/**
 * PATCH /videos/:videoId
 */
router.patch('/:videoId', [], update)

/**
 * DELETE /videos/:videoId
 */
router.delete('/:videoId', destroy)

export default router
