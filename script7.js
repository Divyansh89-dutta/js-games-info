//step-1 var rect = document.querySelector(".rect");rect.addEventListener("mousemove", function(details) {console.log(details.clientX);});
var rect = document.querySelector(".rect");

rect.addEventListener("mousemove", function (details) {
    var rectWidth = rect.getBoundingClientRect().width;
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rectWidth / 2,
        window.innerWidth - 100,
        details.clientX
    );

    gsap.to(rect, {
        left: xval + "px",
        ease: Power3.easeOut
    });
});

