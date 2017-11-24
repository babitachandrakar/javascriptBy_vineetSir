var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.post('/pt/execute', function(req, res) {
   console.log("Got request... pt/execute");
   setTimeout( function() {
    var ptData = {
             ptThroughPut: 2000,
             ptResponseTime: 100
          };
      res.send(ptData);
   }, 1000);
});

app.post('/ft/execute', function(req, res) {
  setTimeout( function() {
    var ftData = {
        ftTestCasesRun : 10,
        ftTestCasesPass: 10,
    }
    res.send(ftData);
  }, 4000);
});

/*
 i need following apis:
  /pt/execute
  /ft/execute

  each of these apis should return the execution id
  sleep in their function for 1s and return some dummy data
*/

app.listen(3000, () => {
 console.log("Started server on 3000");
}); 
