Person = require("./prog_15_mod.js");
function Student(name, school) {
  Person.call(this, name);
  this.school = school;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getInfo = function() {
  Person.prototype.getInfo.call(this);
  console.log("School: ", this.school);
}

var std = new Student("Ash", "RFS");
std.getInfo();
