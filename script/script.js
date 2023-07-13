const pic1 = document.getElementById("pic-1");
const pic2 = document.getElementById("pic-2");
const pic1Tag = '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">';
const pic2Tag = '<img class="pic" src="img/bastion_3b_restorationkid.jpg" alt="pic2">';
const pic3Tag = '<div id="pic-3"><img class="pic" src="img/bastion_narrator.0.jpg" alt="pic3"></div>';

function alternatePic (pic) {
    if(pic.innerHTML == pic1Tag)
    {pic.innerHTML = pic2Tag;}
    else
    {pic.innerHTML = pic1Tag;};
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
