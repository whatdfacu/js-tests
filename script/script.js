const pic1 = document.getElementById("pic-1");
const pic2 = document.getElementById("pic-2");
const pic3 = document.getElementById("pic-3");
var foto = 2;
var button = document.getElementById("button");
var newFlex = document.getElementById("new-flex");
var newFlexContent1 = "<div><h2>Photo number ";
var nFc2 = "</h2></div>";
var backroundFlex = document.getElementById("body");

function alternatePic(pic) {
  if (foto < 6) {
    pic.innerHTML =
      '<img class="pic" src="img/FOTO'+foto+'.jpg" alt="pic1">';
    foto=foto+1;
  } else {
    pic.innerHTML = '<img class="pic" src="img/FOTO1.jpg" alt="pic1">';
    foto = 2;
  }
}

var butoni = 0;

function newFlexGo() {
    var lupin = 1;
    if (butoni % 2 === 0){
        while (lupin <= 5) {
            button.innerHTML="Hide photos"
            console.log(lupin);
          newFlex.innerHTML=newFlex.innerHTML+newFlexContent1+lupin+nFc2+'<div id="new-pic-'+lupin+'"><img class="pic" src="img/FOTO'+lupin+'.jpg" alt="pic1"></div>';
          lupin=lupin+1;
        }
    }
else {newFlex.innerHTML='';button.innerHTML="Show all photos"}
butoni=butoni+1;
console.log("hiciste click en butoni " + butoni + " veces");
}

pic1.onclick = function () {
  alternatePic(pic1);
};
pic2.onclick = function () {
  alternatePic(pic2);
};

button.onclick = function () {
  newFlexGo();
  newFlex.style.color = "blue";
  this.style.color = "red";
 };
