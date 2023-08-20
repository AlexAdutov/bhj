//const menuLinks = document.getElementsByClassName('menu__link');

const menuLinks = document.querySelectorAll('.menu__link');

const submenus = document.querySelectorAll('.menu_sub');
let c=0;

menuLinks.forEach(menuLink => {
    console.log(c++, menuLink)
    menuLink.addEventListener('click', function(event) {

        const parentMenuItem = menuLink.closest('.menu__item');
        console.log(parentMenuItem)

        const submenu = parentMenuItem.querySelector('.menu_sub');
        console.log(submenu)

        submenus.forEach(sub => {
            if (sub !== submenu) {
                sub.classList.remove('menu_active');
                console.log(sub)
            }
        });

        if (submenu) {
            submenu.classList.toggle('menu_active');
            console.log(submenu)
            event.preventDefault();
        }
    });
});

