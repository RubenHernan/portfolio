
const element = document.querySelector("#about");
const height = element.clientHeight - 75;

//console.log(element.clientHeight)

document.addEventListener("scroll", () => {
    let scrollAbajo = window.scrollY;
    (scrollAbajo >= 0 && scrollAbajo <= height) ? document.body.setAttribute("class", "color1")
    : (scrollAbajo > height && scrollAbajo <= height * 2 ) ? document.body.setAttribute("class", "color2")
    : document.body.setAttribute("class", "color3")
})


const icon = document.querySelector("#icon-menu");
const menu = document.querySelector("#box-menu");

icon.addEventListener("click", () => {
    menu.classList.toggle("box-menu-res");
    icon.classList.toggle("icon-menu-res");
    
})
