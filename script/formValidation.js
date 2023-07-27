/* var formItems = [
formFname = document.getElementById("formFname"),
formLname = document.getElementById("formLname"),
formAge = document.getElementById("formAge"),
formSubmit = document.getElementById("formSubmit")
] */

/* var formFname = document.getElementById("formFname"); */
/* var formLname = document.getElementById("formLname").value;
var formAge = document.getElementById("formAge").value;
 */var formSubmit = document.getElementById("formSubmit");
  

 formSubmit.onclick = function() {
    var checkForm = sayMyName();
    if(checkForm == false){
      return false;
    }
  }
  var formFname = document.getElementById("formFname");
  
  
  function sayMyName() {
    theValue = formFname.value;
  if (theValue != "Facu") {
    console.log("no facu here")
    console.log(theValue)
    return false
  }
  };