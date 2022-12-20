var hamburger = document.querySelector(".ham")
var nalist = document.querySelector(".nav-list")
var links = document.querySelector(".nav-list li")
hamburger.addEventListener("click", function() {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})