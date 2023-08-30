const prePreloadText = document.querySelector(".gif-container");
const prePreload = document.querySelector(".pre-preload");
const preloader = document.querySelector(".preloader")
const mainImg = document.querySelector(".image-container");
function dissipate(){
prePreloadText.style.opacity = 0;
setTimeout(zoomPreLoad, 2000);
}
setTimeout(dissipate, 2000);

function zoomPreLoad(){
    prePreload.style.transition = "all 3s ease";
    prePreload.style.transform = "scale(8)";
    setTimeout(launch, 2000);
}
function launch()
{
    prePreload.style.display = "none";
    preloader.style.display = "block";
    setTimeout(darken, 4000);
}
function darken()
{
 
    preloader.style.transition = "all 2s ease" ;
    preloader.style.opacity = 0;


preloader.style.display = "none";
    const bod = document.querySelector("body");
    bod.style.background =  "#171717";
    mainImg.style.display = "block";
    // bod.style.height = "3000px";
    setTimeout(showmsg, 2000);
}

function showmsg()
{ const msgElem = document.querySelector(".message");
msgElem.style.display = "block";
msgElem.style.transition = "all 1s ease";
msgElem.style.opacity = 1;

    document.querySelector("#sab").style.display = "block";
    document.querySelector("#sab").style.opacity = 1;
    


const mainTwo = document.querySelector(".main2");
mainTwo.style.display ="block";
}

//to fade each li element one by one
function display(elem){

}
const live = document.querySelectorAll("li");
for (let i=0;i<live.length;++i) {
display(live[i]);
}