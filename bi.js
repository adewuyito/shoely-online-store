const allSlides = Array.from(
  document.querySelectorAll(".swiper-slide.is-photo.w-dyn-item")
);
let counter = allSlides.length;

function switchClassFwd() {
  const isActive = allSlides.find((slide) =>
    slide.classList.contains("is-active")
  );
  const indexOfActive = allSlides.indexOf(isActive);
  if (indexOfActive === counter - 1) {
    isActive.classList.remove("is-active");
    allSlides[0].classList.add("is-active");
  } else {
    isActive.classList.remove("is-active");
    allSlides[indexOfActive + 1].classList.add("is-active");
  }
}

function switchClassBck() {
  const isActive = allSlides.find((slide) =>
    slide.classList.contains("is-active")
  );
  const indexOfActive = allSlides.indexOf(isActive);
  if (indexOfActive === counter + 1) {
    isActive.classList.remove("is-active");
    allSlides[0].classList.add("is-active");
  } else {
    isActive.classList.remove("is-active");
    allSlides[indexOfActive - 1].classList.add("is-active");
  }
}

let buttnFwd = document.querySelector(".is-left");
let buttnBck = document.querySelector(".is-right");

buttnFwd.addEventListener("click", switchClassFwd);
buttnBck.addEventListener("click", switchClassBck);
