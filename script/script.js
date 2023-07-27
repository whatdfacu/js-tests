var domElements = [
pic1 = document.getElementById("pic-1"),
button = document.getElementById("button"),
button2 = document.getElementById("button2"),
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

function fuck(){
  document.write("<h1>fuck everything</h1>")
  console.log("done")

}

/* button2.onclick=function(){console.log(find_max([100,1,2,3,200,25]));} */

button2.onclick=function(){addNewTag()};


function addNewTag(){
  var grid1Tag = document.getElementById("grid-item-1");
  var newTag = document.createElement("button");
  newTag.setAttribute("class","button-29")
  newTag.setAttribute("id","button3")
  newTag.setAttribute("role","button")
  var inside = document.createTextNode("button");
  newTag.appendChild(inside);
  grid1Tag.appendChild(newTag);
  console.log(newTag);
  button3 = document.getElementById("button3"),
  button3.onclick=function(){fuck()};
}

function find_max(nums) {
let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
for (let num of nums) {
if (num > max_num) {
max_num = num;}
}
return max_num;
}

