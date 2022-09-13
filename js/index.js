// NAV
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("nav-container").style.position = "fixed";
    document.getElementById("nav-container").style.backgroundColor="#524d4d";
    document.getElementById("nav-container").style.boxShadow="0 3px 8px 0 rgba(0, 0, 0, 0.712)";
  } else {
    document.getElementById("nav-container").style.position = "relative";
    document.getElementById("nav-container").style.backgroundColor="transparent";
    document.getElementById("nav-container").style.boxShadow="";
  }
};

// // SIDERBAR
const btnMenu = document.querySelector (".btn-menu");
const navMenu = document.querySelector (".nav__menu");
const btnClose = document.querySelector (".btn-close");
// ESCUCHO EL EVENTO CLICK SOBRE EL BOTON
btnMenu.addEventListener("click", () =>{
  navMenu.classList.toggle("visible");
});
btnClose.addEventListener("click", () =>{
  navMenu.classList.toggle("visible");
});



