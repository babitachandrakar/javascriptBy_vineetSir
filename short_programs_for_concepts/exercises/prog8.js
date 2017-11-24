var testing = [1,2,3,4,5];

var retVal = testing.some((val) => { if(val == 3) return true; });
console.log("Return value", retVal);
