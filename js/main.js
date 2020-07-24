document.addEventListener("DOMContentLoaded", () => {

const spinWheel = document.querySelector(".main__wheel"),
      glowElement = document.querySelector(".main__glow"),
      overlay = document.querySelector(".overlay"),
      buttonPlay = document.querySelector(".main__play"),
      buttonClosePopup = document.querySelector(".modal__button");
      SPINDURATION = 3000,
      GLOWDURATION = 500;

    let random = 0,
    isButtonClickedOnce = true;

    function spinFunc() {
        random +=(Math.random()*360) + 720;
        spinWheel.style.transform = "rotate(" + random + "deg)";
        spinWheel.style.webkitTransform = "rotate(" + random + "deg)";
    }

    function glowFunc() {
        glowElement.classList.remove("active")
        setTimeout(() => {
            glowElement.classList.add("active")
        }, SPINDURATION)
    }

    buttonPlay.addEventListener("click", () => {
        if (isButtonClickedOnce === false) return;
        isButtonClickedOnce = false;
        spinFunc();
        glowFunc();
    })

    glowElement.addEventListener("animationend",() => {
        setTimeout(() => {
            overlay.classList.add("open");
        }, GLOWDURATION)
    });

    buttonClosePopup.addEventListener("click", () => {
        overlay.classList.remove("open");
        isButtonClickedOnce = true;
    })
})