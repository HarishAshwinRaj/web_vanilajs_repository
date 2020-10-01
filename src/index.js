import "./styles.css";
const el = document.querySelectorAll(".active-elements");
const bl = document.querySelector(".nav-menu");

bl.addEventListener("click", function () {
  for (let i = 0; i < el.length; i++) {
    el[i].classList.toggle("active");
    console.log(i);
  }
});
