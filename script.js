var spongebobSound = new Audio('sounds/spongebob1.wav');
    var patrickSound = new Audio('sounds/patrick1.wav');
    var squidwardSound = new Audio('sounds/squidward1.wav');
    var mrKrabSound = new Audio('sounds/mrKrabs1.wav');

function spongeSound(){
    if (spongebobSound.paused) {
            spongebobSound.play();
        } else {
            spongebobSound.pause();
        }
}
function patSound(){
    if (patrickSound.paused) {
            patrickSound.play();
        } else {
            patrickSound.pause();
        }
}
function squidSound(){
    if (squidwardSound.paused) {
            squidwardSound.play();
        } else {
            squidwardSound.pause();
        }
}
function krabSound(){
    if (mrKrabSound.paused) {
            mrKrabSound.play();
        } else {
            mrKrabSound.pause();
        }
}

/*
document.getElementsByClassName("soundButton1")[0].addEventListener('click', function () {
        spongebobSound.play();
        if (spongebobSound.paused) {
            spongebobSound.play();
        } else {
            spongebobSound.pause();
        }
    }, false);
    */