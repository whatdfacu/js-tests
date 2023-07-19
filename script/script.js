var domElements = [
pic1 = document.getElementById("pic-1"),
button = document.getElementById("button"),
newFlex = document.getElementById("new-flex"),
backroundFlex = document.getElementById("body"),
sign = document.getElementById("sign"),
tit = document.getElementById("doc-tit"),
mod = document.getElementById("doc-mod"),
wid = document.getElementById("win-wid"),
loc = document.getElementById("win-loc")
]

var newFlexContent = [
  nFc1 = "<div><h2>Photo number ",
  nFc2 = "</h2></div>"
]

var foto = 2;
function alternatePic(pic) {
  if (foto < 6) {
    pic.innerHTML =
      '<img class="pic" src="img/FOTO' + foto + '.jpg" alt="pic1">';
      console.log('Photo Number ' + foto);
      foto ++;
  } else {
    pic.innerHTML = '<img class="pic" src="img/FOTO1.jpg" alt="pic1">';
    console.log('Photo Number 1');
    foto = 2;
  }
}

var butoni = 0;
function newFlexGo(){
  if (butoni % 2 === 0){
    for (i=1; i <= 5 ; i++){
      button.innerHTML = "Hide photos";
      newFlex.innerHTML = newFlex.innerHTML + nFc1 + i + nFc2 + '<div id="new-pic-' + i + '"><img class="pic" src="img/FOTO' + i + '.jpg" alt="pic1"></div>';
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

/* tit.onclick = function(){ console.log(document.title); alert(document.title)}
mod.onclick = function(){ console.log(document.lastModified); alert(document.lastModified)}
wid.onclick = function(){ console.log(window.screen.width); alert(window.screen.width)}
loc.onclick = function(){ console.log(window.location); alert(window.location)} */