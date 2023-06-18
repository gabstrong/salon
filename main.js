var open = document.getElementById('fullimage');
var slide = document.getElementById('fullpic');


function openImg(pic){
open.style.display = "flex";
slide.src= pic;
}
function closeImg(){
open.style.display = "none"
}