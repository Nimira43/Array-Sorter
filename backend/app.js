import fs from 'node:fs/promises'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(3000)
