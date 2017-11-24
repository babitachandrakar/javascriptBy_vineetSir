## Exercise 1
* Problem statement: use array.reduce function to categorize members into team buckets

* Initial code for the above problem is laid out below

```
var teamArray = [ {name: "Dinesh", subTeam: "Manual QA"},
           {name: "Seema", subTeam: "Manual QA"},
           {name: "Ramesh", subTeam: "Performance Testing"},
    {name: "Smriti", subTeam: "Automation"},
    {name: "Shankar", subTeam: "Manual QA"},
    {name: "Sachin", subTeam: "Automation"},
    {name: "Rahim", subTeam: "Performance Testing"}]

//Write code
var subTeams = teamArray.reduce(categorize, [{tag:"Manual QA", teamMembers:[]}, {tag: "Automation", teamMembers:[]}, {tag: "Performance Testing", teamMembers: []}]);

console.log("SubTeam buckets: ", subTeams);

function categorize(soFar, obj, index) {
//write code here....
//hint
// access subTeam element from obj e.g. obj.subTeam
// search for this value in soFar e.g. soFar.find( function(val) { if(val.tag == obj.subTeam) return true; }
// above should return you an object.
// now save obj.name in this returned object e.g. foundObj.teamMembers.push(obj.name);

/* Expected output*/
/*
SubTeam buckets:  [ { tag: 'Manual QA',
    teamMembers: [ 'Dinesh', 'Seema', 'Shankar' ] },
  { tag: 'Automation', teamMembers: [ 'Smriti', 'Sachin' ] },
  { tag: 'Performance Testing',
    teamMembers: [ 'Ramesh', 'Rahim' ] } ]
*/
```
