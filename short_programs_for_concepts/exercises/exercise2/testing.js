function Testing(testedOnDate, productName, releaseNumber, component, testEngineer, id) {
  this.testCases = [];
  this.id = id;
  this.testedOnDate = testedOnDate;
  this.testEngineer = testEngineer;
  this.productName = productName;
  this.releaseNumber = releaseNumber; 
  if(['API', 'Android', 'iOS'].find((val) => {return val == component})){
    this.component = component; 
  } else {
    console.log("Invalid value of component", component);
    throw("Invalid value of component");
  }
}

Testing.prototype.execute = function() {
   console.log("Execution started ", this.id);
}
Testing.prototype.getReport = function() {
   console.log("Test Report: Initiated query with DB ");
}
Testing.prototype.printInfo = function() {
/* for(key in Object.keys(this)) {
    console.log(key, this[key]);
 }*/
console.dir(this, {depth: 10});
}
module.exports = Testing;
