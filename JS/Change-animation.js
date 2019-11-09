//  Event handler
let testChange = document.querySelector("#company-logo h1");
const tabletView = window.matchMedia("(min-width: 768px)");
const desktopView = window.matchMedia("(min-width: 1024px)");

if(matchMedia) {
    tabletView.addListener(tabletWidthChange);
    tabletWidthChange(tabletView);
}

if(matchMedia) {
    desktopView.addListener(desktopWidthChange);
    desktopWidthChange(desktopView);
}

function tabletWidthChange(tabletView) {

    if(tabletView.matches) {
        let contentAnimation = document.querySelector("#right-animation-moto");
        contentAnimation.removeAttribute("data-aos", "fade-up");
        contentAnimation.setAttribute("data-aos", "fade-left");

        let contentAnimationTwo = document.querySelector("#left-animation-inspection");
        contentAnimationTwo.removeAttribute("data-aos", "fade-up");
        contentAnimationTwo.setAttribute("data-aos", "fade-right");

        let contentAnimationTwoButton = document.querySelector("#left-animation-inspection-button");
        contentAnimationTwoButton.removeAttribute("data-aos", "fade-up");
        contentAnimationTwoButton.setAttribute("data-aos", "fade-right");

        let contentAnimationThree = document.querySelector("#right-animation-maintenance");
        contentAnimationThree.removeAttribute("data-aos", "fade-up");
        contentAnimationThree.setAttribute("data-aos", "fade-left");
        
        let contentAnimationThreeButton = document.querySelector("#right-animation-maintenance-button");
        contentAnimationThreeButton.removeAttribute("data-aos", "fade-up");
        contentAnimationThreeButton.setAttribute("data-aos", "fade-left");
        
        let contentAnimationFour = document.querySelector("#left-animation-repair");
        contentAnimationFour.removeAttribute("data-aos", "fade-up");
        contentAnimationFour.setAttribute("data-aos", "fade-right");
        
        let contentAnimationFourButton = document.querySelector("#left-animation-repair-button");
        contentAnimationFourButton.removeAttribute("data-aos", "fade-up");
        contentAnimationFourButton.setAttribute("data-aos", "fade-right");
    }
}

function desktopWidthChange(desktopView) {
    
}