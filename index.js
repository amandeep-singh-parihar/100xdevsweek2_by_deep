// const fs = require("fs");

// function callbackFn(err,data)
// {
//     console.log(data);
// }
// fs.readFile('a.txt','utf8',callbackFn);

// ****************************************************************************************** //
const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");

// function middleware1(req, res, next) {
//   console.log("from indside the middle ware " + req.headers.counter);
//   next();
// }
// app.use(middleware1);
//            |
//            ↓
app.use(bodyParser.json()); 
//This line tells your application to use the body-parser middleware to handle incoming request bodies formatted as JSON.
// Here's what it does:

// Parse JSON request bodies: It parses the incoming JSON payload in the HTTP request body and makes it available as a JavaScript object on the req.body property.

// Middleware: The bodyParser.json() middleware function is invoked for every incoming request before your routes or handlers process it.

// If the client sends JSON data in the request body (e.g., { "name": "John" , "age" : 20, "counter":100 }), req.body will be undefined because the raw data is not parsed.

// Now, bodyParser.json() ensures that the JSON data in the request body is parsed and assigned to req.body. When the client sends { "name": "John" }, req.body will contain { name: 'John' }.

function sum(n) {
  var sum = 0;
  for (var i = 0; i <= n; ++i) {
    sum += i;
  }
  return sum;
}

function fact(n) {
  var mul = 1;
  for (var i = 1; i <= n; ++i) {
    mul *= i;
  }
  return mul;
}

app.get("/handleSum", (req, res) => {
  // var counter = req.query.counter;\
  // console.log(req.headers);
  // console.log(req.body); //This is to console
  // var counter = req.body.counter;

  var counter=req.query.counter;

  // if(counter<1000000)
  // {
  //   var calculatedSum=sum(counter);
  //   var answer="this sum is " + calculatedSum;
  //   res.send(answer);
  // }else{
  //   res.status(411).send("You have sent a very big number");
  // }
  // var calculatedSum = sum(counter);
  // var calculatedMul = mul(counter);
  var ansObject = {
    name : req.body.name,
    sum: sum(counter),
    fact: fact(counter),
  };
  res.status(200).send(ansObject);
  // var x=req.body.name;
  // console.log(x);
  // var ans = sum(counter);
  // console.log(ans);
  // var toShow = "The sum is " + ans;
  // res.send(toShow);
});

//new route 29-12-2024
function givePage(req, res) {
  //First way       ↓
  //   res.send(`<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Hello from page</title>
  // </head>
  // <body>
  //     <b>Hi there</b>
  // </body>
  // </html>`);
  
  //Second way     ↓
  res.sendFile(__dirname + "/index.html");
}

app.get("/", givePage);

app.post("/createUser", (req, res) => {
  res.send("User Created");
}); //doing this using postman

app.put("/somePutHandler", (req, res) => {
  res.send("this is the put request to test");
}); //doing this using postman

app.delete("/someDelHandler", (req, res) => {
  res.send("this is the delete handler to test");
}); //doing this using postman

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var calculatedSum = sum(100);
console.log(calculatedSum);