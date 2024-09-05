setInterval(function(){

},1000);
var container = "";
for (var i = 1; i <= 100; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var num = Math.floor(Math.random() * 100);
    container += `<div style="background-color: rgb(${red}, ${green}, ${blue});" class="bubble h-20 w-20 text-3xl flex items-center
     justify-center rounded-full">${num}</div>`;
}

document.querySelector(".main").innerHTML = container;