let sofas = [
    {
        image: "img/sofa.jpeg",
        name: "King",
        price: 20000
    },
    {
        image: "img/sofa-2.jpeg",
        name: "Princess",
        price: 50000
    },
    {
        image: "img/sofa-3.jpeg",
        name: "Lovers",
        price: 90000
    },
    {
        image: "img/sofa-4.jpeg",
        name: "PiliWilli",
        price: 29000
    },
    {
        image: "img/sofa-5.jpeg",
        name: "Queen",
        price: 910000
    },
    {
        image: "img/sofa-6.jpeg",
        name: "Alehandro",
        price: 60000
    },
    {
        image: "img/sofa.jpeg",
        name: "King",
        price: 20000
    },
    {
        image: "img/sofa-2.jpeg",
        name: "Princess",
        price: 50000
    },
    {
        image: "img/sofa-3.jpeg",
        name: "King",
        price: 20000
    },
    {
        image: "img/sofa-4.jpeg",
        name: "PiliWilli",
        price: 29000
    },
    {
        image: "img/sofa.jpeg",
        name: "King",
        price: 20000
    },
    {
        image: "img/sofa.jpeg",
        name: "King",
        price: 20000
    },
]

const slider = document.querySelector("#slider")
const right = document.querySelector("#right")
const left = document.querySelector("#left")

const catalog = document.querySelector("#catalog")

sofas.forEach((sofa) => {
    catalog.innerHTML += `
    <div class='sofa'>
        <img src='${sofa.image}'>
        <h5>${sofa.name}</h5>
        <span>$ ${sofa.price}</span>
    </div>
    `
})

let sliderNumber = 0
slider.style.backgroundImage = `url(${sofas[sliderNumber].image})`

right.addEventListener("click",() => {
    if (sliderNumber >=sofas.length -1 ) {
        sliderNumber = 0
        slider.style.backgroundImage = `url(${sofas[sliderNumber].image})`
        return
    }
    sliderNumber +=1
    slider.style.backgroundImage = `url(${sofas[sliderNumber].image})`

})

left.addEventListener("click",() => {
    if (sliderNumber === 0) {
        sliderNumber = sofas.length -1
        slider.style.backgroundImage = `url(${sofas[sliderNumber].image})`
        return
    }
    sliderNumber -=1
    slider.style.backgroundImage = `url(${sofas[sliderNumber].image})`
})

// let imageSlider = new Array().fill(sofas.image)
// console.log(imageSlider)