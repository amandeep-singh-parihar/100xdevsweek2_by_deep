const express = require("express");
const app = express();
const port = 8000;
var bodyParser = require("body-parser"); //need for the body

app.use(bodyParser.json()); //need for the body

// var numberOfReq=0;
// function middleware1(req,res,next){
//   numberOfReq+=1;
//   console.log("total requests -> "+numberOfReq);
//   next();
//   // console.log("from inside the middleware : "+req.headers.counter)
//   // res.send("error from inside the middleware")
//   // next();// if the next is called then only conrtol reach the below e.g, app.get, app.post etc
// }
// //just write the below of the middleware
// app.use(middleware1);

function sum(n) {
  var sum = 0;
  for (var i = 0; i <= n; ++i) {
    sum += i;
  }
  return sum;
}
console.log(sum(10));

app.get("/whatis", (req, res) => {
  var counter = req.query.counter;
  var calculatedSum = sum(counter);
  console.log(calculatedSum);
  var ans = "The sum is " + calculatedSum;
  res.send(ans);
});

app.post("/postHandler", (req, res) => {
  // console.log(req.headers);
  // var counter = req.headers.counter;
  // console.log("this is the counter : "+ counter)
  // console.log(req.body);
  // var counter=req.body.counter;
  // var calculatedSum = sum(counter);
  // res.send("The sum is " + calculatedSum);
  var counter = req.body.counter;
  if (counter < 1000000) {
    var calculatedSum = sum(counter);
    res.send("The sum is : " + calculatedSum);
  } else {
    res.status(411).send("You have sent very big number");
  }
});

app.put("/putHandler", (req, res) => {
  res.send("put request to test on postman");
});

app.delete("/delHandler", (req, res) => {
  res.send("delete handler hai bhai ye");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
