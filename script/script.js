const pic1 = document.getElementById("pic-1");
const pic2 = document.getElementById("pic-2");
const pic1Tag = '<img class="pic" src="img/2pexels-pixabay-355887.jpg" alt="pic1">';
const pic2Tag = '<img class="pic" src="img/bastion_3b_restorationkid.jpg" alt="picture2" alt="pic2">';;

function alternatePic (pic) {
    if(pic.innerHTML === pic1Tag)
    {pic.innerHTML = pic2Tag;}
    else
    {pic.innerHTML = pic1Tag;};
};

pic1.onclick = function(){alternatePic(pic1);}
pic2.onclick = function(){alternatePic(pic2);}
