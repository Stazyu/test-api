const express = require('express');
const brainly = require('./brainly');
const instagramFetcher = require('./instagram');
const app = express()
const port = process.env.PORT || 5000;
const { yt1s } = require('./ytdl')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/ytdl', async (req, res) => {
    const { url } = req.query;
    const start = new Date();
    const yt = await yt1s(url);
    const end = new Date() - start
    res.send({
        result: yt,
        time_response: end + 'ms'
    }).status(200);
})
app.get('/brainly', async (req, res) => {
    const { question, total } = req.query;
    console.log(question, total);
    try {
        const start = new Date();
        const brain = await brainly(question, total)
        const end = new Date() - start
        res.send({
            result: brain,
            time_response: end + 'ms'
        }).status(200);
    } catch (err) {
        res.send({
            result: null,
            err: err
        }).status(404);
    }
})

app.get('/instagram', async (req, res) => {
    const { url } = req.query;
    try {
        const start = new Date();
        const instagram = await instagramFetcher(url);
        const end = new Date() - start
        res.send({
            result: instagram,
            time_response: end + 'ms'
        }).status(200);
    } catch (err) {
        res.send({
            result: null,
            err: err
        }).status(404);
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))