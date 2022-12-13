const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Dropdown sort
const chainHeader = $$(".chain-header");
const chainContent = $$(".chain-content");
console.log(chainHeader);
chainHeader.forEach((i, index) => {
  i.addEventListener("click", () => {
    chainContent[index].classList.toggle("chain-content-active");
  });
});

// Click icon sort
const containerNavLeft = $(".container-nav-left");
const containerContent = $(".container-content");
const contentSort = $(".content-sort");
const contentItem = $(".content-item");
containerNavLeft.onclick = function () {
  containerContent.classList.toggle("content-active");
  contentSort.classList.toggle("content-sort-active");
  contentItem.classList.toggle("content-item-active");
};
