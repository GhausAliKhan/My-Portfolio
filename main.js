const nav = document.querySelector(".toolbar");
const openButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");

openButton.addEventListener('click', () => {
    nav.classList.add("visible");
})

closeButton.addEventListener('click', () => {
    nav.classList.remove("visible");
})