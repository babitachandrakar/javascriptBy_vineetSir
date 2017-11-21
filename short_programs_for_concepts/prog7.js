var teamArray = [ {name: "Dinesh", subTeam: "Manual QA"},
           {name: "Seema", subTeam: "Manual QA"},
           {name: "Ramesh", subTeam: "Performance Testing"},
    {name: "Smriti", subTeam: "Automation"},
    {name: "Shankar", subTeam: "Manual QA"},
    {name: "Rahim", subTeam: "Performance Testing}]

//Write code
var subTeams = teamArray.reduce(categorize, [{tag:"Manual QA", teamMembers:[]}, {tag: "Automation", teamMembers:[]}, {tag: "Automation", teamMembers: []}]);

function categorize(soFar, obj, index) {
//write code here....
//hint
// access subTeam element from obj e.g. obj.subTeam
// search for this value in soFar e.g. soFar.find( function(val) { if(val == obj.tag) return true; }
// above should return you an object.
// now save obj.name in this returned object e.g. soFar.teamMembers.push(obj.name);
}
//Expected output
var subTeams = [ {tag: "Manual QA", teamMembers: ["Dinesh", "Seema", "Shankar"]},
         {tag: "Performance Testing", teamMembers: ["Ramesh", "Rahim"]},
         {tag: "Automation", teamMembers: ["Smriti"]} ];

