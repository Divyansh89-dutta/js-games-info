    var audio = document.querySelector("audio");
    var play = document.querySelector(".play");
    var pause = document.querySelector(".pause");
    var previous = document.querySelector(".previous");
    var next = document.querySelector(".next");

    play.addEventListener("click", function(){
        audio.play();
        play.classList.add("hidden");
        pause.classList.remove("hidden");
    });
    pause.addEventListener("click", function(){
        audio.pause();
        play.classList.remove("hidden");
        pause.classList.add("hidden");
    });
    previous.addEventListener("click", function(){
        audio.currentTime = 0;
    });
    next.addEventListener("click", function(){
        audio.currentTime = 0;
    });
