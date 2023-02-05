import express from 'express'
import CacheService from './lib/redis'

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  const { key, value } = req.body

  await CacheService.set(key, value)

  /**
   * ! EXAMPLE
   *  "key": "test",
   *  "value": "test"
   */

  res.send('OK')
})

app.get('/:key', async (req, res) => {
  const { key } = req.params

  const value = await CacheService.get(key)

  res.send(value)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
