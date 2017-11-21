/* create CityClass objects using it's manager */
CityClassManager = require('./prog13.js');
cityManager = new CityClassManager();

var city1 = cityManager.getCity("Navi Mumbai");
var city2 = cityManager.getCity("Mumbai");
var city3 = cityManager.getCity("Gurugram");

console.log("Name: ", city1.name);
console.log("Name: ", city2.name);
console.log("Name: ", city3.name);
console.log("Count: ", cityManager.getCount());
