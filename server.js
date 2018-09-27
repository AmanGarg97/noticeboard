const express = require('express')
const path = require('path')

const app = express();

const port = process.env.PORT || 2679

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)


app.listen(port, () => console.log('Server started at http://localhost:2679'))