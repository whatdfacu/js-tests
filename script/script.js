const pic1 = document.getElementById("pic-1");
const pic2 = document.getElementById("pic-2");
const pic1Tag = '<img class="pic" src="img/FOTO1.jpg" alt="pic1">';
const pic2Tag = '<img class="pic" src="img/FOTO2.jpg" alt="pic2">';
const pic3Tag = '<div id="pic-3"><img class="pic" src="img/FOTO3.jpg" alt="pic3"></div>';

var foto = 2;

function alternatePic (pic) {
    if(foto < 6)
    {pic.innerHTML = '<img class="pic" src="img/FOTO'+foto+'.jpg" alt="pic1">'; foto = foto+1}
    else
    {pic.innerHTML = '<img class="pic" src="img/FOTO1.jpg" alt="pic1">'; foto = 2};
};

pic1.onclick = function(){alternatePic(pic1);};
pic2.onclick = function(){alternatePic(pic2);};

var button = document.getElementById("button");
var newFlex = document.getElementById("new-flex");
var newFlexContent = '<div><p>hi, the loop is: </p></div>';
var backroundFlex = document.getElementById("body")

function newFlexGo(){

    var lupin = 1;    
    while(lupin <= 10){

        console.log(lupin);
        newFlex.innerHTML =  newFlex.innerHTML + newFlexContent + lupin + pic3Tag;
        lupin = lupin + 1;
    }
    
};

button.onclick = function(){newFlexGo();newFlex.style.color='blue';this.style.color='red';backroundFlex.style.backgroundColor='red'};
