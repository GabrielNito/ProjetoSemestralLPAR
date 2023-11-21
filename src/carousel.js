const slidesContainer = document.querySelector("#slides-container")
const slide = document.querySelector(".slide")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

nextButton.addEventListener("click", () => {
    let progress = slidesContainer.scrollLeft / slidesContainer.scrollWidth
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft += slideWidth * 1.065

    if (progress == 0.7727272727272727) {
        slidesContainer.scrollLeft -= 10000
    }
})

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft -= slideWidth * 1.065
})

function slides() {
    let progress = slidesContainer.scrollLeft / slidesContainer.scrollWidth
    setTimeout(function () {
        const slideWidth = slide.clientWidth
        slidesContainer.scrollLeft += slideWidth * 1.063
        if (progress == 0.7727272727272727) {
            slidesContainer.scrollLeft -= 10000
        }
        slides()
    }, 5000)
}
slides()