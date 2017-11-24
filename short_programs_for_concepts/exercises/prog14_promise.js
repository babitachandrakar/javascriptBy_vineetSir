var p1 = null;
var counter = 10;
function myPromise() {
 if(p1 == null) {
   console.log("1. Promise is null");
   p1 = new Promise(cbPromise);
   return p1;
  }
 else {
    console.log("2. Promise is not null now..", p1);
    p1 = p1.then(cbPromiseHandler);
    return p1;
 }
}

function cbPromise(resolve, reject) {
     console.log("3. cbPromise called");
     if(counter == 10) setTimeout(() => {counter++; console.log("4.1 timer..", counter);  resolve(counter);}, 1000);
     if(counter == 11) setTimeout(() => {counter++; console.log("4.2 timer..", counter);  resolve(counter);}, 3000);
     if(counter == 12) setTimeout(() => {counter++; console.log("4.3 timer..", counter);  resolve(counter);}, 6000);
     if(counter == 13) setTimeout(() => {counter++; console.log("4.4 timer..", counter);  resolve(counter);}, 3000);
     if(counter == 14) setTimeout(() => {counter++; console.log("4.5 timer..", counter);  resolve(counter);}, 3000);
     
}

function cbPromiseHandler(val) {
   if(counter != 13) {
   console.log("6. cbPromiseHandler: Value..:", val);
   return new Promise(cbPromise);
   } else {
     counter++;
     return val;
   }
}


myPromise().then((val) => {
  console.log("5. in called promise fn.. handler", val);
  return new Promise((res, rej) => { res(20); });
});

myPromise().then((val) => {
  console.log("7. in called promise fn..2nd time handler", val);
});
myPromise().then((val) => {
  console.log("8. in called promise fn..3rd time handler", val);
});
myPromise().then((val) => {
  console.log("9. in called promise fn..4th time handler", val);
});
myPromise().then((val) => {
  console.log("9. in called promise fn..5th time handler", val);
});
