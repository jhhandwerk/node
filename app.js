const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to the machine. Where have you been? It's ok, we know where you've been. You've been in the pipeline filling in time..");
});
const port = process.env.port||3000;
app.listen(port, () =>{
    console.log("Wazzzappp");
});
