const humbeger = document.querySelector(".humbeger");
const close = document.querySelector(".close");
const tabledNav = document.querySelector(".tabledNav");



humbeger.addEventListener("click", () => {
    tabledNav.classList.toggle("active");
    humbeger.style.display = "none";
    close.style.display = "flex";


})

close.addEventListener("click", () => {
    tabledNav.classList.remove("active");
    close.style.display = "none";
    humbeger.style.display = "flex";


})