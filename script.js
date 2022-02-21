const img1 = document.querySelector(".images-container img:nth-child(1)")
const img2 = document.querySelector(".images-container img:nth-child(2)")
const img3 = document.querySelector(".images-container img:nth-child(3)")
const mainImage = document.querySelector(".main-image")
// console.log(img1.attributes[0].value)

// img1.style = "border-bottom: 5px solid red"

img1.addEventListener('click', function () {
    img1.style = "border-bottom: 5px solid red;margin-bottom: -5px;"
    img2.style = "border-bottom: none"
    img3.style = "border-bottom: none"
    mainImage.attributes[0].value = "assets/tenis-1-ampliado.png"
})

img2.addEventListener('click', function () {
    img2.style = "border-bottom: 5px solid red;margin-bottom: -5px;"
    img1.style = "border-bottom: none"
    img3.style = "border-bottom: none"
    mainImage.attributes[0].value = "assets/tenis-2-ampliado.png"
})

img3.addEventListener('click', function () {
    img3.style = "border-bottom: 5px solid red;margin-bottom: -5px;"
    img2.style = "border-bottom: none"
    img1.style = "border-bottom: none"
    mainImage.attributes[0].value = "assets/tenis-3-ampliado.png"
})