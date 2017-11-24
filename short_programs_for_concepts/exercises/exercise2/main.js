var PerformanceTesting = require('./performance_testing.js');
var FunctionalTesting = require('./functional_testing.js');


var pt1 = new PerformanceTesting(1, ['throughput', 'resposneTime'],
                              ['192.168.2.2', '192.168.2.3'],
                              2000,[
                               '2017-11-23',
                                'JioCinema',
                                '2.9.0',
                                'Android',
                                'Pradnya'] 
                              )
var pt2 = new PerformanceTesting(2, ['throughput', 'resposneTime'],
                              ['192.168.2.2', '192.168.2.3'],
                              2000,[
                               '2017-11-23',
                                'JioMags',
                                '2.0.0',
                                'Android',
                                'Pranali'] 
                              )



pt1.printInfo();
pt1.execute(0)
  .then((val) => {
   return pt2.execute(val);   
 })
.then( (val) => {
  return pt1.execute(val);
})
.then( (val) => {
  return pt1.execute(val);
});

/*
var ft1.execute(1)
.then(..
...blah..blah..
*/
