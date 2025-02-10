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

app.get('/meals', async (req, res) => {
  const meals = await fs.readFile('./data/available-meals.json', 'utf8')
  res.json(JSON.parse(meals))
})

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }

  res.status(404).json({ message: 'Page Not Found'})
})

app.post('/orders', async (req, res) => {
  const orderData = req.body.order

  if (orderData === null ||
    orderData.items === null ||
    orderData.items.length === 0
  ) {
    return res
      .status(400)
      .json({ message: 'Missing Data.'})
  }
})

app.listen(3000)
