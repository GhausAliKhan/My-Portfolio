const hamburger = document.querySelector(".hamburger");
const toolbarMenu = document.querySelector(".toolbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  toolbarMenu.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    toolbarMenu.classList.remove("active");
  })
);

const popupSection = document.querySelector(".popupSection");
const X = document.querySelector(".X");
const page = document.querySelector(".page");

document.querySelectorAll(".seeProject").forEach((n) =>
  n.addEventListener("click", () => {
    popupSection.style.display = "block";
    page.style.filter = "blur(5px)";
  })
);

function disappear() {
  popupSection.style.display = "none";
  page.style.filter = "blur(0px)";
}
X.addEventListener("click", disappear);

function disappearPage(event) {
  if (event.target.className == "popupSection") {
    popupSection.style.display = "none";
    page.style.filter = "blur(0px)";
  }
}
popupSection.addEventListener("click", disappearPage);

