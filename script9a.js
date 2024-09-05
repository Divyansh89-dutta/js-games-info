for (var i = 1; i <= 50; i++) {
    var bubble = document.createElement("div");
    bubble.textContent = Math.floor(Math.random() * 100);
    bubble.classList.add(
        "w-20",
        "h-20",
        "flex",
        "justify-center",
        "text-3xl",
        "items-center",
        "rounded-full",
        "bg-green-500"
    );
    document.querySelector(".main").appendChild(bubble);
}