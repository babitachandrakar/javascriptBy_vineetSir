var teamArray = ["mA", "mB", "mC", "mD"];
var teamNames = ["Abhishek", "Bhoomi", "Chandra", "Dinesh"];
var teamExperienceInYears = [5, 2, 5, 6];

function transformAbb(val, index) { // get array of experience in months
    return teamExperienceInYears[index]*12; 
 }

teamExperienceInMonths = teamArray.map(transformAbb);

console.log("Team Experience(Months): ", teamExperienceInMonths);

val = teamExperienceInMonths.reduce(aggregateExperience);
console.log("Total Experience: ", val);
function aggregateExperience(soFar, val, index) {
   soFar = (soFar*(index) + val)/(index+1);
   return soFar;
}
