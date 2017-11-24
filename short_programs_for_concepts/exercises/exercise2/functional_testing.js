var Testing = require('./testing.js');
function FunctionalTesting (features, devices, testMeta) {
  Testing.call(this, testMeta);
  this.features = features;
  this.devices = devices;
}

FunctionalTesting.prototype = Object.create(Testing.prototype);
FunctionalTesting.prototype.constructor = FunctionalTesting;

FunctionalTesting.prototype.execute = function() {
   Testing.prototype.execute.call(this);
   setTimeout( () => {
     console.log("Executed functional testing..");
   }, 4000);
}

FunctionalTesting.prototype.getReport = function() {
  Testing.prototype.getReport.call(this);
  setTimeout( () => {
    console.log("Report generated, query fired.. printed");
  }, 1000);
}

module.exports = FunctionalTesting;
