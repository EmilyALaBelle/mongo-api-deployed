import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getAllFurniture, addNewFurniture, updateFurniture } from './src/furniture.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/furniture', addNewFurniture)
app.get('/furniture', getAllFurniture)
app.patch('/furniture/:furnitureId', updateFurniture)

export const api = functions.https.onRequest(app)