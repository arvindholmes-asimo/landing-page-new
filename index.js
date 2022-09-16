const menu = document.getElementById('menu'); 
const navBar = document.getElementById('navbar');

// on click of menu show navbar
menu.addEventListener('click', toggleNavMenu);

// action
function toggleNavMenu() {
    if(navbar.style.display === 'flex'){
        navbar.style.display = 'none';
    }else{
        navBar.style.display = "flex";
    }
}