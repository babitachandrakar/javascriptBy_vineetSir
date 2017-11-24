var qaTeamMembers = [{name: "Pradnya", project: "JioCinema"}, 
                    {name: "Priya", project: "JioCinema"}, 
                    {name: "Abhishek", project: "JioCinema"}, 
                    {name: "Kuldeep", project: "JioXpressNews"},
                    {name: "Pranali", project: "JioFeaturePhone", "experience":2}]


console.log("Keys in qaTeamMembers: ", Object.keys(qaTeamMembers));

for( var index in qaTeamMembers) {
  if(qaTeamMembers[index].name != undefined)
     console.log("QA Team member: ", index, qaTeamMembers[index]["name"]);
}


qaTeamMembers.forEach( function( member, index) {
  if(val.name != undefined)
     console.log(index, member.name.toLowerCase());
});
