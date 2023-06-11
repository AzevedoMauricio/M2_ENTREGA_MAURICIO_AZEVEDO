function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  targetElement.scrollIntoView({ behavior: "smooth" });
}

const scrollLinks = document.querySelectorAll(".scroll");
scrollLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});
