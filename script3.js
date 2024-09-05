var arr = [
    {
        name: "Milton",
        color:"blue",
        price: 100,
        qty: 1,
        price: "$234",
        made:"Made In India",
        company:"Yash"
    },
    {
        name: "Divyansh",
        color:"blue",
        price: 100,
        qty: 1,
        price: "$230",
        company:"Div",
        made:"Made In India"
    }
]
var clutter = "";
arr.forEach(function (item){
    clutter += `<div class="products">
    <div class="w-[50vw] p-3 font-['gilroy'] flex flex-col gap-4 bg-zinc-200 rounded-md">
    <div class="h-[40vh] bg-gray-500 bg-[url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center"></div>
        <h1 class="text-2xl text-red-500 font-semibold tracking-tighter leading-none">${item.name} </h1>
        <div class="flex justify-between">
            <h4 class= "text-gray-500 font-semibold">Company:- ${item.company}</h4>
            <h4 class = "font-semibold">Made:- ${item.made}</h4>
        </div>
        <div class="flex justify-between">
            <h4 class= "text-blue-500 font-semibold">Color- ${item.color}</h4>
            <h2 class="text-yellow-500 font-semibold">Price:- ${item.price}</h2>
        </div>
    </div>
</div>` 
})
document.querySelector(".product").innerHTML = clutter;