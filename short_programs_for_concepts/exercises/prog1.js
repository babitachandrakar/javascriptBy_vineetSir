var counter = 0;

var printCount = function() {
  counter ++;
  console.log("Count now is: ", counter);
  setTimeout(printCount, 1000);
}


setTimeout(printCount, 1000);
