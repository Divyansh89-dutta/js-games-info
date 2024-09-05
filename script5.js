var showmodal = document.querySelector(".slowmodal");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".close");

showmodal.addEventListener("click", function(){
    overlay.classList.remove("hidden");
})

close.addEventListener("click", function(){
    overlay.classList.add("hidden");
})