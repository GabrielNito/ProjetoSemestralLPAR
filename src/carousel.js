const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".containers-carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth * 1.145;

    let progress = slidesContainer.scrollLeft / slidesContainer.scrollWidth
    console.log(progress)

    if (progress > .7) {
        slidesContainer.scrollLeft -= 10000
    }
});
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth * 1.145;
});
function slides() {
    setTimeout(function () {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth * 1.145
        let progress = slidesContainer.scrollLeft / slidesContainer.scrollWidth

        if (progress > .7) {
            slidesContainer.scrollLeft -= 10000
        }

        slides()
    }, 5000)
}
slides()