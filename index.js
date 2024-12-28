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

function sum(n) {
  var sum = 0;
  for (var i = 0; i <= n; ++i) {
    sum += i;
  }
  return sum;
}

app.get("/handleSum", (req, res) => {
  // var counter = req.query.counter;\
  console.log(req.headers);
  var counter = req.headers.counter;
  var ans = sum(counter);
  // console.log(ans);
  var toShow = "The sum is " + ans;
  res.send(toShow);
});

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
