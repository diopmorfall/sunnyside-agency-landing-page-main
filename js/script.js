const menu = document.querySelector(".menu");
let menuClasses = menu.classList;
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener('click', function(){
    menuClasses.contains("hidden") ?
        menuClasses.remove("hidden") :
        menuClasses.add("hidden")
});

