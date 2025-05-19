const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const navbarConcel = document.querySelector('.navbar-concel');
const overlayNav = document.querySelector('.overlay-nav');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
    overlayNav.classList.toggle('active');

    navbarConcel.addEventListener('click', () => {
        menu.classList.remove('active');
        navbar.classList.remove('active');
        overlayNav.classList.remove('active');
    })

    overlayNav.addEventListener('click', () => {
        menu.classList.remove('active');
        navbar.classList.remove('active');
        overlayNav.classList.remove('active');
    })
})

const btnNav = document.querySelectorAll('.btn-nav');
const option = document.querySelector('.option');

btnNav.forEach((item, i) => {
    item.addEventListener('click', () => {

        btnNav.forEach(item => item.classList.remove('active'));
        item.classList.add('active');

        option.style.marginLeft = `-${i * 100}%`;


        let menuStorage = {
            i: i,
        };

        // localStorage.setItem('menuStorage', JSON.stringify(menuStorage));
    })
})


// window.addEventListener('load', () => {
//     // const menuStorage = JSON.parse(localStorage.getItem('menuStorage')) || [];

//     // btnNav.forEach(item => item.classList.remove('active'));
//     // btnNav[menuStorage.i].classList.add('active');

//     // option.style.marginLeft = `-${menuStorage.i * 100}%`;
// })