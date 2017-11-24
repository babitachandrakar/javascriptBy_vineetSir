var teamArray = [ {name: "Dinesh", subTeam: "Manual QA"},
           {name: "Seema", subTeam: "Manual QA"},
           {name: "Ramesh", subTeam: "Performance Testing"},
    {name: "Smriti", subTeam: "Automation"},
    {name: "Shankar", subTeam: "Manual QA"},
    {name: "Sachin", subTeam: "Automation"},
    {name: "Rahim", subTeam: "Performance Testing"}]

//Write code
var subTeams = teamArray.reduce(categorize, [{tag:"Manual QA", teamMembers:[]}, {tag: "Automation", teamMembers:[]}, {tag: "Performance Testing", teamMembers: []}]);

/*var subTeams = teamArray.reduce(categorize, { "Manual QA" : {teamMembers:[]},
                                              "Automation": {teamMembers:[]},
                                              "Performance Testing": {teamMembers:[]}});*/
console.log("SubTeam buckets: ", subTeams);

function categorize(soFar, obj, index) {

//soFar[obj.subTeam].teamMembers.push(obj.name);
//write code here....
//hint
// access subTeam element from obj e.g. obj.subTeam
// search for this value in soFar e.g. soFar.find( function(val) { if(val.tag == obj.subTeam) return true; }
// above should return you an object.
// now save obj.name in this returned object e.g. foundObj.teamMembers.push(obj.name);
 foundObj = soFar.find( function(val) { if(val.tag == obj.subTeam) return true; });
 if(foundObj != undefined)
    foundObj.teamMembers.push(obj.name); 
 else 
    console.log("Not found this tag: ", obj.tag);
 return soFar;
}
//Expected output
/*var subTeams = [ {tag: "Manual QA", teamMembers: ["Dinesh", "Seema", "Shankar"]},
         {tag: "Performance Testing", teamMembers: ["Ramesh", "Rahim"]},
         {tag: "Automation", teamMembers: ["Smriti"]} ];*/

