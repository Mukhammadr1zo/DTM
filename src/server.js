const express = require('express')
const cors = require('cors')

const modules = require('./modules/modules.js')


const { PORT } = require('./utils/config')

const app = express()

app.use(express.json())
app.use(cors())

app.use(modules)

app.use((error, req, res, next) => {
    return res.send({ error: error.error?.message || error.message || 'Something went wrong!' })
})

app.listen(PORT, () => console.log(`Server ready on *${PORT}`))