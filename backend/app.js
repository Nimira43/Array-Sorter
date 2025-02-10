import fs from 'node:fs/promises'
import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }

  res.status(404).json({ message: 'Page Not Found'})
})

app.listen(3000)
