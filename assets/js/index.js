const ToggleMenu = document.querySelector('#ToggleMenu');
const menuMobile = document.querySelector('#menuMobile')

ToggleMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-list')
})
