const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

 app.get('/hello', (req, res) => {
        res.send('hello world')
    });


app.listen(port, () => {
    console.log(`Example App Listening on Port ${port}`)
});