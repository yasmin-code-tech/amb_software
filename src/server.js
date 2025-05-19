console.log("Olá devs!");

const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
    sonsole.log("listen to port" + port);
})

