const leftArrow = document.getElementsByClassName("arrow-left")[0];
const rightArrow = document.getElementsByClassName("arrow-right")[0];
const sectionsList = document.querySelector("[data-slide-id='2']");

const firstSlide = document.getElementsByClassName("homepage")[0];
firstSlide.classList.add("active-slide");


const activeSlideGetDataId = () => {
    let activeSlideDataId = 0;
    const activeSlide = document.getElementsByClassName("active-slide")[0];
    activeSlideDataId = activeSlide.dataset.slideId;
    return activeSlideDataId;
}

const showNextSlide = (slideId, direction) => {
    let nextSlideId = 0;
    if(direction === 'right') {
        nextSlideId = parseInt(slideId) + 1;
    } else if(direction === 'left') {
        nextSlideId = parseInt(slideId) - 1;
    }
    const nextSlide = document.querySelector(`[data-slide-id='${nextSlideId}']`);
    const thisSlide = document.querySelector(`[data-slide-id='${slideId}']`);
    nextSlide.classList.add("active-slide")
    thisSlide.classList.remove("active-slide");
}

rightArrow.addEventListener("click", function() {
    let activeSlide = activeSlideGetDataId();
    showNextSlide(activeSlide, 'right');
})

leftArrow.addEventListener("click", function() {
    let activeSlide = activeSlideGetDataId();
    showNextSlide(activeSlide, 'left');
})