const express = require('express')

const app = express()

const port = process.env.PORT || 3000


express.static('http://localhost:3000/')
app.use(express.static('web'))

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(port, () => console.log('App is up on ' + port))
