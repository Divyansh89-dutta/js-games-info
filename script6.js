//step-1 var rect = document.querySelector(".center");rect.addEventListener("mousemove",function(){console.log(rect.getBoundingClientRect());})
//step-2 var rect = document.querySelector(".center");rect.addEventListener("mousemove",function(details){var rectangleloction = rect.getBoundingClientRect();console.log(details.clientX-rectangleloction.left);})
//step-3 var rect = document.querySelector(".center");rect.addEventListener("mousemove",function(details){var rectangleloction = rect.getBoundingClientRect();var insiderectval = details.clientX-rectangleloction.left;if(insiderectval < rectangleloction.width/2){console.log("left");}else{console.log("right");}})
var rect = document.querySelector(".center");
rect.addEventListener("mousemove", function(details) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insideRectVal = details.clientX - rectangleLocation.left;

    if (insideRectVal < rectangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: "power4"
        });
    } else {
        var blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: "power4"
        });
    }
});
rect.addEventListener("mouseleave",function(){
   gsap.to(rect, {
    backgroundColor: "white",
    ease: "power4"
    });
})

