function logResponsebody(jsonBody){
    console.log(jsonBody)
}

function callbackFn(result) {
  result.json().then(logResponsebody);
}

var sendObj = {
  method: "GET"
};

fetch("http://localhost:3000/handleSum?counter=5", sendObj).then(callbackFn);