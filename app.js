const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('8') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

// Change for commit

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line
})
