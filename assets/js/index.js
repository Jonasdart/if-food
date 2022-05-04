actualImage = 1;
secondsDelay = 5;

function nextImage(){
    if(actualImage === 1){
        document.getElementById("promo1").style.display = "none";
        document.getElementById("promo2").style.display = "block";
        actualImage = 2;
    }else {
        document.getElementById("promo2").style.display = "none";
        document.getElementById("promo1").style.display = "block";
        actualImage = 1;
    }
}

setInterval(nextImage, secondsDelay*1000);