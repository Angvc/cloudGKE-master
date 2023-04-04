'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama: Ang Vincent Colin  NIM: 52020006  Jurusan : Teknik Informatika \n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
