const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to the machine. Where have you been?");
    res.send("Where have you been? It's ok...");
});

const port = process.env.port||3000;
app.listen(port, () =>{
    console.log("Wazzzappp");
});
