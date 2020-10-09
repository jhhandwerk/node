const express = require('express');
const app = express();
var http = require('http');
var dt = require('./date_module');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time is currently: ' + dt.myDateTime());
    res.end();
})

app.get('/', (req, res) =>{
    res.send("Welcome to the machine. Where have you been? It's ok, we know where you've been. You've been in the pipeline filling in time..");
});
const port = process.env.port||3000;
app.listen(port, () =>{
    console.log("Wazzzappp");
});
