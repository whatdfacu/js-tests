var formFname = document.getElementById("formFname");
var formLname = document.getElementById("formLname");
var formAge = document.getElementById("formAge");
var formSubmit = document.getElementById("formSubmit");

formSubmit.onclick = function () {
    if (sayMyName() == false) {
        return false;
    }
};

function sayMyName() {
    theValue = formFname.value;
    if (theValue != "Facu") {
        console.log("no facu here");
        console.log(theValue);
        formFname.select();
        return false;
    }
}
