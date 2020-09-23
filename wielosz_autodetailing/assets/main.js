const container = document.querySelector(".container");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let slideNumber = 1;

const getActualContainerWidth = () => {
    const containerWidth = container.getBoundingClientRect().width;
    return parseInt(containerWidth);
} 

const getActualContainerLeft = () => {
    const containerLeftValue = getComputedStyle(container).left;
    return parseInt(containerLeftValue);
}

// const getActualSlidePossition = () => {
//     const singleSlideWidth = getActualContainerWidth() / 4;
//     const slideNumber = (getActualContainerLeft() - singleSlideWidth) / singleSlideWidth;
//     return -1 * slideNumber;
// }

const setLeftOnResize = () => {
    // debugger;
    const containerWidth = getActualContainerWidth();
    const containerLeft = getActualContainerLeft();
    const containerLeftNew = (containerWidth / 4) * slideNumber - (containerWidth / 4)
    
    
    container.style.left = - containerLeftNew + "px";
    
    console.log("Szerokość kontenera: " + containerWidth + "\nLEFT kontenera: " + containerLeft + "\nNumer slajdu: " + slideNumber + "\nLeft new :" + containerLeftNew);


}


leftArrow.addEventListener('click', function() {
    container.style.left = getActualContainerLeft() + (getActualContainerWidth() / 4) + "px";
    slideNumber--
});

rightArrow.addEventListener('click', function() {
    container.style.left = getActualContainerLeft() - (getActualContainerWidth() / 4) + "px";
    slideNumber++
});

window.onresize = setLeftOnResize;
