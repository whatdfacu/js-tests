var pic1 = document.getElementById("pic-1");

var pic2 = document.getElementById("pic-2");

pic1Tag = '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">';

pic2Tag = '<img class="pic" src="img/bastion_3b_restorationkid.jpg" alt="picture2" alt="pic2">';

function change1 () {

    pic1.innerHTML = '<img class="pic" src="img/bastion_3b_restorationkid.jpg" alt="picture2" alt="pic2">';
    
}

function change2 () {

    pic2.innerHTML = '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">';
    
}
function alternatePic1 () {
    if (pic1.innerHTML == '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">') {

        pic1.innerHTML = '<img class="pic" src="img/bastion_3b_restorationkid.jpg" alt="picture2" alt="pic2">';

    }
    else {

        pic1.innerHTML = '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">';

    };
};

function alternatePic2 () {
    if (pic2.innerHTML == '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">') {

        pic2.innerHTML = '<img class="pic" src="img/bastion_3b_restorationkid.jpg" alt="picture2" alt="pic2">';

    }
    else {

        pic2.innerHTML = '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">';

    };
};

pic1.onclick = function(){
    alternatePic1();
}

pic2.onclick = function(){
    alternatePic2();
}
