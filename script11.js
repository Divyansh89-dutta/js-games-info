const names = [
    "Alice", "Bob", "Charlie", "David", "Eva", 
    "Frank", "Grace", "Hannah", "Ivan", "Jack",
    "Karen", "Liam", "Mia", "Noah", "Olivia"
];

function print(usernames) {
    var container = "";
    usernames.forEach(function(name) {
        container += `<h3 class="text-lg tracking-tight px-3 py-2">${name}</h3>`;
    });
    document.querySelector(".scrollercustom").innerHTML = container;
}

print(names);

var input = document.querySelector("input");
input.addEventListener("input", function() {
    var ans = names.filter(function(name) {
        return name.toLowerCase().startsWith(input.value.toLowerCase());
    });
    print(ans);
});
