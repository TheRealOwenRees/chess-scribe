import { Router, Request, Response } from 'express'
// import Pgn2Tex from 'pgn2tex'
// import * as strStream from 'string-to-stream'
// import latex from 'node-latex'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ type: 'success', message: 'Testing PDF endpoint' })
})

export default router
