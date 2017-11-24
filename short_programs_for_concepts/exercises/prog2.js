var qaTeamMembers = ["Pradnya", "Priya", "Abhishek", "Kuldeep", "Pranali"];


console.log("Keys in qaTeamMembers: ", Object.keys(qaTeamMembers));

for( var index in qaTeamMembers) {
  console.log("QA Team member: ", index, qaTeamMembers[index]);
}
