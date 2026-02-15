const footerTitles = document.querySelectorAll(".footer-title");
const footerLinks = document.querySelectorAll(".footer-links");
const footerPlus = document.querySelectorAll(".footer-plus");
const footerMinus = document.querySelectorAll(".footer-minus");

footerTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    if (footerLinks[index].classList.contains("hidden")) {
      footerLinks[index].classList.replace("hidden", "flex");
      footerPlus[index].classList.replace("block", "hidden");
      footerMinus[index].classList.replace("hidden", "flex");
    } else {
      footerLinks[index].classList.replace("flex", "hidden");
      footerPlus[index].classList.replace("hidden", "block");
      footerMinus[index].classList.replace("flex", "hidden");
    }
  });
});
