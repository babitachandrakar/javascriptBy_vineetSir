## Exercise# 2:
  Write Base class - Testing. Derived classes - PerformanceTesting and FunctionalTesting
  Use prototype chaining method to do so
  Base class should provide for following:
  * array of test cases
  * method: execute
  * method: getReport
  * attribute: testedOnDate
  * attribute: testEngineer
  * attribute: productName
  * attribute: releaseNumber
  * attribute: component
  * methods to get/set various parameters
  Base and Derived class should have constructor to initialize the values in object
  Derived classes should setup their specific attributes / methods, as following:
  
### PerformanceTesting:
  * attribute: array of performance parameters
  * attribute: setupNodes
  * attribute: durationOfTesting
  * method: execute (must invoke parent method also)
  * method: getReport (must invoke parent getReport also)
  * methods to get/set various parameters


### FunctionalTesting:
  * attribute: array of features
  * attribute: devices
  * method: execute
  * method: getReport
  * methods to get/set various parameters


### Main Code
  * Create Object of PerformanceTesting and FunctionalTesting activities with initial values
  * set PT Parameters / values
  * set Functional Parameters / values 
  * call PT Execute and report methods
  * call FT execute and report methods
