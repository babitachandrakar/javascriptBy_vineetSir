var getListOfTeamMembers = function() {
   return ["Dhanashree", "Priyanka"];
}

console.log("Team members: ", getListOfTeamMembers());


console.log("Function: ", getListOfTeamMembers);
console.log("Prototype: ", getListOfTeamMembers.prototype);
console.log(typeof getListOfTeamMembers.prototype);

var obj = new getListOfTeamMembers();

function Engineer(name, discipline, city) {
  this.name = name;
  this.discipline = discipline;
  this.getDiscipline = function() { return this.discipline; }
}

Engineer.prototype.getDetails = function() {
  console.log("Details: ", this.name, this.discipline);
}

Engineer.prototype.getLowerCaseName = function() {
   console.log("Lowercase: ", this.name.toLowerCase());
}

var engineer1 = new Engineer("Pranali", "Electronics");
var engineer2 = new Engineer("Pratiksha", "CompSc");

engineer1.getDetails(); engineer1.getLowerCaseName(); 
console.log("Discipline: ", engineer1.getDiscipline());
engineer2.getDetails();
