class Person {
  static updateCount () {
    if(Person.count == undefined)
        Person.count = 0;
    Person.count ++; 
  }
  static getCount () {
    return Person.count;
  } 
  constructor(name) {
    this.name = name; 
    Person.updateCount();
  } 
  getInfo() {
    console.log("Name: ", this.name);
  }
  get nameWithSalutation() {
     return "Mr " + this.name;
  }
}

class Student extends Person {
   constructor(name, school) {
     super(name);
     this.school = school;
   }
   getInfo() {
     super.getInfo();
     console.log("School: ", this.school);
   }
}

var std = new Student("Vineet", "Jio");
std.getInfo();
console.log("Name with sal..", std.nameWithSalutation);
var std2 = new Student("Maya", "QA");
console.log("Total objects: ", Person.getCount());
