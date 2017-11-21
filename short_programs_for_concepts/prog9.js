var teamArray = [ {name: "Dinesh", subTeam: "Manual QA"},
           {name: "Seema", subTeam: "Manual QA"},
           {name: "Ramesh", subTeam: "Performance Testing"},
    {name: "Smriti", subTeam: "Automation"},
    {name: "Shankar", subTeam: "Manual QA"},
    {name: "Sachin", subTeam: "Automation"},
    {name: "Rahim", subTeam: "Performance Testing"}]

console.log("Original team:", teamArray);
console.log("Now filter it only for Manual QA");

console.log(teamArray.filter( function(val) { if(val.subTeam == "Manual QA") return true; }))
