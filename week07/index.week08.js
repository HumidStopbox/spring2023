import express from 'express'
import redis from 'redis'

const app = express()
const db = redis.createClient({
    url: 'redis://localhost:6379'
})
await db.connect()
const port = 80         // port 80 is used for the http protocal


app.get('/save/:number', async (req, res) => {
    await db.set("thenumber", req.params.number)
    res.send("Good Choice")
})

app.get('/showme', async (req, res) => {
    const number = await db.get("thenumber")
    res.send(`<!DOCTYPE html><html><body>${number}</body></html>`)
})


app.get('/inc-dec', async (req, res) => {
    await db.set("thenumber", req.params.number)
    res.send(`/week07/thursday.js`)
})

app.get(`/echo/:value`, async(req, res) => {
    res.send(req.params)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.static('week07/public'))