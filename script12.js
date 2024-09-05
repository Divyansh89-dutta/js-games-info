let products = [
    {
        name: "Chanel Coco Mademoiselle Eau de Parfum",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 1500,
        rating: 4.7,
        description: "A classic fragrance with notes of rose, jasmine, and patchouli.",
        price: 129.99
    },
    {
        name: "Nike Air Zoom Pegasus 38 Running Shoes",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 3000,
        rating: 4.9,
        description: "Versatile running shoes with responsive cushioning for a smooth ride.",
        price: 129.99
    },
    {
        name: "Apple Watch Series 7",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 4000,
        rating: 4.8,
        description: "Advanced smartwatch with health monitoring features and a vibrant display.",
        price: 399.99
    },
    {
        name: "Samsung QLED 4K Smart TV",
        image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 6000,
        rating: 4.7,
        description: "Immersive television experience with stunning picture quality and smart features.",
        price: 1499.99
    },
    {
        name: "Sony Alpha a7 III Mirrorless Camera",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 2500,
        rating: 4.9,
        description: "Professional-grade camera with high-resolution imaging and 4K video capabilities.",
        price: 1999.99
    },
    {
        name: "Bose QuietComfort 45 Noise-Canceling Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popularity: 1800,
        rating: 4.8,
        description: "Premium headphones with world-class noise cancellation and superior sound quality.",
        price: 329.99
    }
];


function print() {
    var container ="";
    products.forEach(function (value) {
    container+=` 
            <div class="w-64 h-[400px] bg-white rounded-md p-[7px]  font-semibold">
                   <div class="w-full h-[150px] bg-red-100 leading-[25px]">
                    <img class="w-full h-full" src='${value.image}' >
                   </div>
    <h1 class="capitalize  ">${value.name}</h1>
    <h2 class="mt-[5px] font-normal">${value.description}</h2>
    <h3 class="mt-[5px]">Price:${value.price}</h3>
    <button class="bg-blue-300 p-[7px] rounded-md text-white font-bold text-lg mt-[15px]">Add to Cart</button>
            </div>
        `
    })
    document.querySelector(".card").innerHTML=container;    
}

print();
var select= document.querySelector("select")

select.addEventListener("change",function(){
    if(select.value==="popularity"){
        products.sort((a,b) => b.popularity - a    .popularity)
print();    }
    else{
        products.sort((a,b) => a.rating - b.rating)
print();
    }
})