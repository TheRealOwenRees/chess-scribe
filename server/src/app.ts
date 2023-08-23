import express, { type Express } from 'express'
import { unknownEndpoint, serverError } from './middleware/errorHandlers'
import pdfRoutes from './routes/pdf'
import pgnRoutes from './routes/pgn'

const app: Express = express()

// middleware / error handlers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/pdf', pdfRoutes)
app.use('/api/pgn', pgnRoutes)

app.use(unknownEndpoint)
app.use(serverError)

export default app
