var teamArray = ["mA", "mB", "mC", "mD"];
var teamNames = ["Abhishek", "Bhoomi", "Chandra", "Dinesh"];
var teamExperience = [5, 2, 5, 6];

function transformAbb(val, index) {
    console.log("Value: ", val);
    return val + "(" + teamNames[index] + ")"; 
 }

modTeamArray = teamArray.map(transformAbb);

console.log("Original Team array: ", teamArray);
console.log("Modified Team array: ", modTeamArray);

