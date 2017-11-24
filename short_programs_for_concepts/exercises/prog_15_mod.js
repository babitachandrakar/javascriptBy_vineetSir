var testContext = {};
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function(otherPerson) {
   console.log(this.name + " says Hello to " + otherPerson.name);
}

Person.prototype.getInfo = function() {
 console.log("Name: ", this.name);
}

//var p1 = new Person("Anurvi");
//var p2 = new Person("Pratiksha");

//p1.sayHello(p2);

module.exports = Person;
