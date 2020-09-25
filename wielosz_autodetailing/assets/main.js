const container = document.querySelector(".container");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const navLiItems = document.querySelectorAll("nav ul li");

let slideNumber = 1;


const navigationTextArray = [
    {
        slideNumberFor: 1,
        left: false,
        leftArrowHTML: ``,
        right: true,
        rightArrowHTML: `<p class="navigation--smaller">Co możemy zrobić</p><p class="navigation--bigger">Dla Twojego auta</p>`,
        specialClass: false,
    },
    {
        slideNumberFor: 2,
        left: true,
        leftArrowHTML: `<p class="navigation--smaller">Wróć do</p><p class="navigation--bigger">Strony głównej</p>`,
        right: true,
        rightArrowHTML: `<p class="navigation--smaller">Zobacz nasze</p><p class="navigation--bigger">Realizacje</p>`,
        specialClass: true,
    },
    {
        slideNumberFor: 3,
        left: true,
        leftArrowHTML: `<p class="navigation--smaller">Co możemy zrobić</p><p class="navigation--bigger">Dla Twojego auta</p>`,
        right: true,
        rightArrowHTML: `<p class="navigation--bigger">Kontakt</p><p class="navigation--smaller">ze mną</p>`,
        specialClass: false,
    },
    {
        slideNumberFor: 4,
        left: true,
        leftArrowHTML: `<p class="navigation--smaller">Zobacz nasze</p><p class="navigation--bigger">Realizacje</p>`,
        right: false,
        rightArrowHTML: ``,
        specialClass: true,
    }
]

let navigationArrowIndex = navigationTextArray.includes("Co możemy zrobić");
console.log(navigationArrowIndex);

const navigationItemChange = (slideNumberGet) => {
    navLiItems.forEach(item => {
        item.classList.remove("active");
        item.classList.remove("active-negative");
    })
    if(slideNumberGet == 1 || slideNumberGet == 3) {
        navLiItems[slideNumberGet-1].classList.add("active")
    } else {
        navLiItems[slideNumberGet-1].classList.add("active-negative")
    }
}

const changeNavigationArrowText = (slideNumberGet) => {
    
    if(slideNumberGet) {
        slideNumberGet--
        if(navigationTextArray[slideNumberGet].right) {
            rightArrow.style.visibility = "visible";
            rightArrow.innerHTML =  navigationTextArray[slideNumberGet].rightArrowHTML;
        } else {
            rightArrow.style.visibility = "hidden";
        }
        if(navigationTextArray[slideNumberGet].left) {
            leftArrow.style.visibility = "visible";
            leftArrow.innerHTML =  navigationTextArray[slideNumberGet].leftArrowHTML;
        } else {
            leftArrow.style.visibility = "hidden";
        }
        if(navigationTextArray[slideNumberGet].specialClass) {
            rightArrow.classList.add("color-negative");
            leftArrow.classList.add("color-negative");
        } else {
            rightArrow.classList.remove("color-negative");
            leftArrow.classList.remove("color-negative"); 
        }
    }
}

const getActualContainerWidth = () => {
    const containerWidth = container.getBoundingClientRect().width;
    return parseInt(containerWidth);
} 

const getActualContainerLeft = () => {
    const containerLeftValue = getComputedStyle(container).left;
    return parseInt(containerLeftValue);
}

const setLeftOnResize = () => {
    const containerWidth = getActualContainerWidth();
    const containerLeftNew = (containerWidth / 4) * slideNumber - (containerWidth / 4)
    container.style.left = - containerLeftNew + "px";
    console.log("Szerokość kontenera: " + containerWidth + "\nLEFT kontenera: " + containerLeft + "\nNumer slajdu: " + slideNumber + "\nLeft new :" + containerLeftNew);
}
const goToSlideNav = (slideNumberClick) => {
    const containerWidth = getActualContainerWidth();
    const containerLeftNew = (containerWidth / 4) * slideNumberClick - (containerWidth / 4)
    container.style.left = - containerLeftNew + "px";

    slideNumber = slideNumberClick
    changeNavigationArrowText(slideNumberClick);
    navigationItemChange(slideNumberClick)
}

leftArrow.addEventListener('click', function() {
    container.style.left = getActualContainerLeft() + (getActualContainerWidth() / 4) + "px";
    slideNumber--;
    changeNavigationArrowText(slideNumber);
    navigationItemChange(slideNumber)
});
rightArrow.addEventListener('click', function() {
    container.style.left = getActualContainerLeft() - (getActualContainerWidth() / 4) + "px";
    slideNumber++;
    changeNavigationArrowText(slideNumber);
    navigationItemChange(slideNumber)
});

navLiItems.forEach(liItem => {
    liItem.addEventListener("click", function () {
        const slideNumberClick = this.dataset.slideId;

        goToSlideNav(slideNumberClick);
    })

})

changeNavigationArrowText(slideNumber);
navigationItemChange(slideNumber)
window.onresize = setLeftOnResize;
