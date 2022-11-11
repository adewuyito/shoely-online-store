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
  if (indexOfActive === 0) {
    isActive.classList.remove("is-active");
    allSlides[counter - 1].classList.add("is-active");
  } else {
    isActive.classList.remove("is-active");
    allSlides[indexOfActive - 1].classList.add("is-active");
  }
}

let buttnFwd = document.querySelector(".is-right");
let buttnBck = document.querySelector(".is-left");

buttnFwd.addEventListener("click", switchClassFwd);
buttnBck.addEventListener("click", switchClassBck);

/* let activeClass = $(".swiper-slide.is-photo.w-dyn-item").find("is-active");
console.log(activeClass); */

/* function cwr() {
  let calulatedFwd = document.querySelector("is-active").index() * counter;
  console.log(calulatedFwd);
}; */

//swiper script
/* let photoSwiper = new Swiper(".swiper.is-photos", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  grabCursor: true,
  loop: true,
  keyboard: true,
  pagination: {
    el: ".counter-wrapper"
  },
  // Navigation arrows
  navigation: {
    nextEl: ".arrow.is-right",
    prevEl: ".arrow.is-left"
  }
});
 */
//Rotated amount
/* function angle() {
  
} */
