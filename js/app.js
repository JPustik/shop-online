"use strict";

import express from 'express';
   
const app = express();

app.use(express.json()); 
   
app.post("js/product", jsonParser, function (request, response) {
    const product = request.body;
    console.log(product);
    if(!product) return response.sendStatus(400);
    const responseText = `Your name: ${user.name}  Your last name: ${user.name2} 
    Your state: ${user.state} Your email ${user.email} Your password ${user.pass}`;
    response.send(responseText);
});
   
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});
   
app.listen(3000);