require('./helper/config.helper')

const express = require('express')
const cors = require('cors')
const { db } = require('./helper/db.helper')
const { Routes } = require('./routes')
const app = express()
const apiPort = process.env.SERVER_PORT

app.use(cors())
app.use(express.json())

new Routes(app)

db.connect(err => {
    if(err) console.log('DB connection failed', JSON.stringify(err, undefined, 2))
    else console.log('DB connection established successfully.')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))