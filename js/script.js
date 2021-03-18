// 

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".header__burger"),
    nav = document.querySelector(".header__menu");

    let isOpen = false;
    
    menu.addEventListener("click", () => {
        if (isOpen) {
            menu.classList.remove("header__burger_open");
            nav.classList.remove("header__menu_open");
            
            isOpen = false;
        } else {
            menu.classList.add("header__burger_open");
            nav.classList.add("header__menu_open");
            
            isOpen = true;
        }
    });
    
    window.addEventListener("scroll", () => {
        let pos = window.scrollY;
        
        if (isOpen && pos > 60) {
            menu.classList.remove("header__burger_open");
            nav.classList.remove("header__menu_open");
            
            isOpen = false;
        }
    });
});