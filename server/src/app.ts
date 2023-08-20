import express, { type Express, Request, Response } from 'express'
import { unknownEndpoint, serverError } from './middleware/errorHandlers'
import pdfRoutes from './routes/pdf'

const app: Express = express()

// middleware / error handlers
app.use(express.json())

// routes
app.use('/api/pdf', pdfRoutes)

app.use(unknownEndpoint)
app.use(serverError)

export default app
