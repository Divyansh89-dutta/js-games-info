var arr = [
    {
        name: "Sakshi",
        image: "https://images.unsplash.com/photo-1513781050488-6dd358209a1b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
        age: "19",
        status: "strangers"
    },
    {
        name: "Divyansh",
        image: "https://images.unsplash.com/photo-1513781050488-6dd358209a1b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
        age: "19",
        status: "strangers"
    },
    {
        name: "Vishu",
        image: "https://images.unsplash.com/photo-1513781050488-6dd358209a1b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini",
        age: "19",
        status: "strangers"
    }
];
function print() {
    var container = "";
    arr.forEach(function (value, index) {
        container += `<div class="card w-[30vw] p-4 rounded-md bg-[#00a0b0] text-white">
        <div class="img w-20 h-20 bg-red-500 rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="${value.image}" alt="">
        </div>
        <h2 class="text-2xl font-semibold text-gray-300 mt-2">${value.name}</h2>
        <p class="text-sm mt-2">${value.description}</p>
        <p class="text-xl font-semibold text-gray-300"> Age: ${value.age}</p>
        <button id="${index}" class="btn text-xl text-gray-200 font-semibold px-3 py-2 ${value.status === 'strangers' ? 'bg-blue-500' : value.status === 'request sent' ? 'bg-yellow-500' : 'bg-red-500'} rounded-md mt-3">
        ${value.status === 'strangers' ? 'Add Friend' : value.status === 'request sent' ? 'Request Sent' : 'Remove Friend'}
    </button>    
    </div>`;
    });

    document.querySelector(".cards").innerHTML = container;
}
print();
var timer;
document.querySelector(".cards").addEventListener("click", function (e) {
    if (arr[e.target.id].status === "strangers") {
        arr[e.target.id].status = "request sent";
        print();
        let num = Math.floor(Math.random() * 10);

        timer = setTimeout(function () {
            arr[e.target.id].status = "friends";
            print();
        }, num * 1000);
    }
    else {
        arr[e.target.id].status = "strangers";
        closerTimeout(timer);
    }
});
print();
