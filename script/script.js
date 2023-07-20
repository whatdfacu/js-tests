var domElements = [
pic1 = document.getElementById("pic-1"),
button = document.getElementById("button"),
newFlex = document.getElementById("new-flex"),
backroundFlex = document.getElementById("body"),
sign = document.getElementById("sign"),
]

var newFlexContent = [
  nFc1 = "<div><h2>Photo number ",
  nFc2 = "</h2></div>"
]

var foto = 2;
function alternatePic(pic) {
  if (foto <= 7) {
    pic.innerHTML =
      '<img class="pic" src="img/FOTO' + foto + '.jpg" alt="pic1">';
      console.log('Photo Number ' + foto);
      foto ++;
  } else {
    pic.innerHTML = '<img class="pic" src="img/FOTO1.gif" alt="pic1">';
    console.log('Photo Number ' + foto);
    foto = 2;
  }
}

var butoni = 0;
function newFlexGo(){
  if (butoni % 2 === 0){
    for (i=1; i <= 7 ; i++){
      if (i === 1) {
        newFlex.innerHTML = '<div id="new-pic-' + i + '"><img class="pic" src="img/FOTO' + i + '.gif" alt="pic1"></div>';        
      } else{

      
      button.innerHTML = "Hide photos";
      newFlex.innerHTML = newFlex.innerHTML + nFc1 + i + nFc2 + '<div id="new-pic-' + i + '"><img class="pic" src="img/FOTO' + i + '.jpg" alt="pic1"></div>';}
    }
  } else 
  {
    newFlex.innerHTML = "";
    button.innerHTML = "Show all photos";
  }
  butoni++;
  console.log("hiciste click en butoni " + butoni + " veces");
}

pic1.onclick = function () {
  sign.style.visibility="hidden"
  alternatePic(pic1);
};

button.onclick = function () {
  newFlexGo();
};
