// // SIDERBAR
const btnMenu = document.querySelector(".btn-menu");
const sideBar = document.querySelector(".sidebar-container");
// ESCUCHO EL EVENTO CLICK SOBRE EL BOTON
btnMenu.addEventListener("click", () => {
  sideBar.classList.toggle("visible");
});
// DROPDOWN
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = document.querySelector(".dropdown-container");
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}
 var dropdown2 = document.getElementsByClassName("dropdown-btn2");
var i;

for (i = 0; i < dropdown2.length; i++) {
  dropdown2[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = document.querySelector(".dropdown-container2");
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}
var dropdown3 = document.getElementsByClassName("dropdown-btn3");
var i;

for (i = 0; i < dropdown3.length; i++) {
  dropdown3[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = document.querySelector(".dropdown-container3");
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}
