const humbergerIcon = document.querySelector("[data-menu-icon]")
const menuBtn = document.querySelector("#menuBtn")
const menu = document.querySelector("#menu")

let isMenuOpen = false

menuBtn.addEventListener("click", () => {
    if (isMenuOpen) {
       
        humbergerIcon.setAttribute("src", "./images/icon-hamburger.svg")
        isMenuOpen = false
        menu.classList.remove("flex")
        menu.classList.add("hidden")

    } else {
        

        humbergerIcon.setAttribute("src", "./images/icon-close.svg")
        isMenuOpen = true
        menu.classList.remove("hidden")
        menu.classList.add("flex")
    }
})


