var team = {
  total_members: 10,
  groups: 4,
  getTotalMembers: function() { return this.total_members; },
  getGroups: function() { return this.groups; }
}

var teams = [{ total_members: 10, groups: 4}, {total_members: 20, groups: 5}]

// if average experience of a member is 4 years, what is the total exp.

function getTotalExperience(exp) {
 return this.total_members * exp;
}

console.log("Team Stats: ", team.getTotalMembers(), team.getGroups());
console.log("Team Exp(): ", getTotalExperience(4));

var exp = getTotalExperience.call(team, 5);

console.log("Team Exp(): ", exp);

teams.forEach( (obj) => { console.log("Exp.., Obj", obj, getTotalExperience.call(obj, 6)); })
