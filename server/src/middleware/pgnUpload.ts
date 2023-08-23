import type { Request, Response, NextFunction } from 'express'
import multer, { MulterError } from 'multer'

export const pgnUpload = multer({
  storage: multer.memoryStorage(),
  fileFilter(req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) {
    if (
      !file.originalname.match(/\.(pgn)$/) &&
      file.mimetype !== 'application/x-chess-pgn' &&
      file.mimetype !== 'application/vnd.chess-pgn'
    ) {
      cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'Invalid file type. Only PGN files are allowed,'))
    }
    cb(null, true)
  }
})

export const handleMulterError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof MulterError) {
    return res.status(415).json({
      type: 'error',
      message: 'Invalid file type. Only PGN files are allowed'
    })
  } else {
    next(err)
    return
  }
}
