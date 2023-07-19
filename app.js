const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('10') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

// Change for commit

app.listen(PORT, '0.0.0.0', () => {
  console.log('server started on port 5000') // eslint-disable-line
})
