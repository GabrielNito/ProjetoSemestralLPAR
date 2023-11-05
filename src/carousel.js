const slidesContainer = document.querySelector("#slides-container")
const slide = document.querySelector(".slide")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft += slideWidth * 1.065

    let progress = slidesContainer.scrollLeft / slidesContainer.scrollWidth

    if (progress > .7) {
        slidesContainer.scrollLeft -= 10000
    }
})

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft -= slideWidth * 1.065
})

function slides() {
    setTimeout(function () {
        const slideWidth = slide.clientWidth
        slidesContainer.scrollLeft += slideWidth * 1.065
        let progress = slidesContainer.scrollLeft / slidesContainer.scrollWidth

        if (progress > .7) {
            slidesContainer.scrollLeft -= 10000
        }

        slides()
    }, 5000)
}
slides()
// https://webdesign.tutsplus.com/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734t