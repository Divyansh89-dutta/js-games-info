var lightson = document.querySelector(".lightson");
var lightsoff = document.querySelector(".lightsoff");
var bulb = document.querySelector(".bulb");

lightson.addEventListener("click",function(){
    bulb.classList.add("bg-yellow-500");
});
lightsoff.addEventListener("click",function(){
    bulb.classList.remove("bg-yellow-500");
});
