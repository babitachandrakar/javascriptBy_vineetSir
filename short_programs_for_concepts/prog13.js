/*
 Example to create module which helps you track of new classes
 and control it's creation
*/
function CityClass(name) {
  this.name = name;
}

/* maintains the count of new objects created from CityClass*/
var CityClassManager = function() {
  this.count = 0;
  this.getCity = function(name) {
    this.count ++;
    return new CityClass(name);
  }
  this.getCount = function() { return this.count; }
}

module.exports = CityClassManager;
