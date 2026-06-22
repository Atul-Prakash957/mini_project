 const slides = document.querySelector(".slides");
    const slideImages = document.querySelectorAll(".slides img");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    function showSlide() {
      slides.style.transform = `translateX(${-index * 600}px)`;
    }

    next.addEventListener("click", () => {
      index++;
      if (index >= slideImages.length) {
        index = 0;
      }
      showSlide();
    });

    prev.addEventListener("click", () => {
      index--;
      if (index < 0) {
        index = slideImages.length - 1;
      }
      showSlide();
    });
