const pic1 = document.getElementById("pic-1");
var foto = 2;
var button = document.getElementById("button");
var newFlex = document.getElementById("new-flex");
var newFlexContent1 = "<div><h2>Photo number ";
var nFc2 = "</h2></div>";
var backroundFlex = document.getElementById("body");
var sign = document.getElementById("sign");

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

function newFlexGo() 
{
  if (butoni % 2 === 0)
  {
    for (i=1; i <= 5 ; i++) 
    {
      button.innerHTML = "Hide photos";
      console.log(i);
      newFlex.innerHTML = newFlex.innerHTML + newFlexContent1 + i + nFc2 + '<div id="new-pic-' + i + '"><img class="pic" src="img/FOTO' + i + '.jpg" alt="pic1"></div>';
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
/*   sign.style.visibility="hidden"
 */  sign.style.display="none"
  alternatePic(pic1);

};

button.onclick = function () {
  newFlexGo();
  this.style.color = "blue";
};

var tit = document.getElementById("doc-tit");
var mod = document.getElementById("doc-mod");
var wid = document.getElementById("win-wid");
var loc = document.getElementById("win-loc");

tit.onclick = function(){ console.log(document.title); alert(document.title)}
mod.onclick = function(){ console.log(document.lastModified); alert(document.lastModified)}
wid.onclick = function(){ console.log(window.screen.width); alert(window.screen.width)}
loc.onclick = function(){ console.log(window.location); alert(window.location)}
