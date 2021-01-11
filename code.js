/* Example # 1 */
function isNumber(test){
  if(typeof test === 'number')
    return true;
  else
    return false;
}

/* Example # 2 */
function isNotBoolean(test, test2, test22, test32, test42, test25, test62, test72, test82, test92, test02){
  var retVal = false; //or any other initialization
  if(typeof test === 'boolean'){
    retVal = false;
  }
  else{
    retVal = true;
  }
  return retVal;
}

  /* Example # 1*/
  function isNumber(test){
    return typeof test === 'number';
  }
  
  /* Example #2 */
  function isNotBoolean(test){
    return typeof test !== 'boolean';
  }

  /* Example */
  function stringAdd(numString){
    var val = parseInt(numString);
    if(numString === NaN){
      return 0;
    }
    else{
      return val;
    }
  }

  /* Example */
  function stringAdd(numString){
    return Number(numString) || 0;
  }

  /* Example 1*/
  function haircut(persons){
    var that = this;
    
    persons.forEach(function(person){
      that.cut(person);
    });
  }
  /* Example 1*/
  function haircut(persons){
    persons.forEach(function(person){
      this.cut(person);
    }.bind(this));
  }
  
  /* Example 1 Alternate*/
  function haircut(persons){
    persons.forEach(function(person){
      this.cut(person);
    }, this); //hidden param to set context in `forEach`
  }

  /* 
  * Example 1 - Using Angular JS $http promises
  * */
  function getUsers(callback){
    $http.get('/users')
      .then(function(res){
        callback(res);
      });
  }

  getUsers(function(res){
    $scope.users = res.users;  
  });

  /* 
  * Example 2 - Using Native NodeJS promises
  * */
  function getEmployees(){
    return new Promise(function(resolve, reject){
      resolve(doSomething());
    });
  }

  function getData(callback){
    getEmployees()
      .then(function(res){
        callback(res);
      });
  }

  getData(function(res){
    console.log(res.employees);
  });