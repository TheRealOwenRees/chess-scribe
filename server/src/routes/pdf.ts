import { Router, Request, Response } from 'express'
import strStream from 'string-to-stream'
import latex from 'node-latex'

import Pgn2Tex from '../utils/pgn2tex'
import logger from '../utils/logger'

const router = Router()

router.post('/', async (req: Request, res: Response, next) => {
  const { pgn, diagrams } = req.body
  try {
    const gameTex = new Pgn2Tex(pgn, diagrams).toTex()
    const texFile = await strStream(gameTex)

    // @ts-ignore
    const pdf = latex(texFile)

    pdf.on('error', (err) => logger.error(err))
    pdf.on('finish', () => logger.info('PDF Generated'))

    res.setHeader('Content-Disposition', 'inline')
    res.setHeader('Content-Type', 'application/pdf')
    pdf.pipe(res)
    res.status(201).json({ type: 'success', message: 'PDF generated' })
  } catch (error) {
    next(error)
  }
})

export default router
