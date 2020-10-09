const express = require('express');
const app = express();
const dt = require('./date_module');


app.get('/', (req, res) =>{
    res.send("Welcome to the machine. Where have you been? It's ok, we know where you've been. You've been in the pipeline filling in time..");

});
app.get('/', (req, res) =>{
    res.write("The date and time are currently: " + dt.myDateTime());
});
const port = process.env.port||3000;
app.listen(port, () =>{
    console.log("Wazzzappp");
});
