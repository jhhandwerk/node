const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("Welcome to the machine. Where have you been?");
});
app.get('/', (req, res) =>{
    res.send("It's ok. We know where you've been...");
});
const port = process.env.port||3000;
app.listen(port, () =>{
    console.log("Wazzzappp");
});
