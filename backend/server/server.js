const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/hello/:id', (req, res) =>{
    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(418).send({message: 'No logo found'})
    }

    res.send({
        tshirt: `Logos whit ${logo} and ID of ${id}` 
    });
});

app.listen(port, () => {
    console.log(`Example App Listening on Port ${port}`)
});