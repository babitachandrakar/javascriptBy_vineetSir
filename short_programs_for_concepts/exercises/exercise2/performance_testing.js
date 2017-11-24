var Testing = require('./testing.js');
var request = require('request');
function PerformanceTesting (id, ptParams, nodes, duration, testMeta ) {
  Testing.call(this, testMeta[0], testMeta[1], testMeta[2], testMeta[3], testMeta[4], 'PT' + id);
  this.ptParams = ptParams;
  this.nodes = nodes;
  this.duration = duration;
}

PerformanceTesting.prototype = Object.create(Testing.prototype);
//PerformanceTesting.prototype.constructor = Testing;

PerformanceTesting.prototype.execute = function(id) {
   console.log("Last execution: ", id);
   Testing.prototype.execute.call(this);
   return new Promise( function (resolve, reject) {
       console.log("Inside promise");
       reqOptions = {
          url: 'http://localhost:3000/pt/execute',
          method: 'POST',
          headers: {
           'Content-Type': 'application/json'
          } 
       };
       var handleResponse = function(error, res, body) {
             console.log("response: ", body);
             resolve(body);
       }
       request(reqOptions, handleResponse); 
   });
/*   return new Promise( (resolve, reject) => {
   setTimeout( () => {
     console.log("Executed performance testing..", this.id);
     resolve(this.id);
   }, this.duration);
  });
*/
}

PerformanceTesting.prototype.getReport = function() {
  Testing.prototype.getReport.call(this);
  setTimeout( () => {
    console.log("Report generated, query fired.. printed");
  }, 1000);
}

module.exports = PerformanceTesting;
