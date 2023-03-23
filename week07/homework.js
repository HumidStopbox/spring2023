import express from 'express'
import redis from 'redis'

const express = require('express')
const app = express()
const port = 80         // port 80 is used for the http protocal

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})