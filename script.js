// Menu header
const btnMenu = document.querySelector(".btn-menu")

function toggleMenu (event) {
    if(event.type === 'touchstart'){
        event.preventDefault()
    }
    const nav = document.querySelector(".header-navegation")
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)
btnMenu.addEventListener('touchstart', toggleMenu)


// Galeria
const imgs = document.querySelectorAll(".images-container img")
const img1 = document.querySelector(".images-container img:nth-child(1)")
const img2 = document.querySelector(".images-container img:nth-child(2)")
const img3 = document.querySelector(".images-container img:nth-child(3)")
const mainImage = document.querySelector(".main-image")

imgs[1].style = "border-bottom: 5px solid var(--red);margin-bottom: -5px;"

function switchImage(event){
    for (let i = 0; i < imgs.length; i++){
        imgs[i].style = "border-bottom: none"
    }
    if (event.target.alt === 'tenis1') {
        imgs[0].style = "border-bottom: 5px solid var(--red);margin-bottom: -5px;"
        mainImage.attributes[0].value = "assets/tenis-1-ampliado.png"
    }else if (event.target.alt === 'tenis2'){
        imgs[1].style = "border-bottom: 5px solid var(--red);margin-bottom: -5px;"
        mainImage.attributes[0].value = "assets/tenis-2-ampliado.png"
    }else{
        imgs[2].style = "border-bottom: 5px solid var(--red);margin-bottom: -5px;"
        mainImage.attributes[0].value = "assets/tenis-3-ampliado.png"
    }
}

img1.addEventListener('click', switchImage)
img2.addEventListener('click', switchImage)
img3.addEventListener('click', switchImage)


// Dark Mode
const switcher = document.querySelector("#checkbox")
const html = document.querySelector('html')
const bag = document.querySelector('.bag')
const logo = document.querySelector('.logo')
const searchIcon = document.querySelector('.search-icon')
const search = document.querySelector('.search')


if(localStorage.darkmode === 'true'){
    themeSwitch()
    switcher.checked = true
}

function themeSwitch(){
    console.log(searchIcon)
    html.classList.toggle('dark-mode')

    if(document.querySelector('html.dark-mode')){
        localStorage.darkmode = 'true'
        bag.src = "assets/icon-bag-dark.svg"
        logo.src = "assets/logo-dark.svg"

    } else {
        localStorage.darkmode = 'false'
        bag.src = "assets/icon-bag.svg"
        logo.src = "assets/logo.svg"
    }


}

switcher.addEventListener('change', themeSwitch)



