import { Router, Request, Response, NextFunction } from 'express'
import { pgnUpload, handleMulterError } from '../middleware/pgnUpload'

const router = Router()

router.post('/', pgnUpload.single('file'), handleMulterError, (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      return res.status(400).json({ type: 'error', message: 'No file was selected' })
    }
    return res.status(200).json(req.file.buffer.toString())
  } catch (error) {
    next(error)
    return
  }
})

export default router
