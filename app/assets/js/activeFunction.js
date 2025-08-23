export const slideFromRight = () => {
  const slideFromRight = document.getElementById("slideFromRight");
  if (slideFromRight) {
    if (slideFromRight.classList.contains("-translate-x-[-100%]")) {
      slideFromRight.classList.remove("-translate-x-[-100%]");
      slideFromRight.classList.add("-translate-x-[0]");
    } else {
      slideFromRight.classList.remove("-translate-x-[0]");
      slideFromRight.classList.add("-translate-x-[-100%]");
    }
  }
};

export const slideFromLeft = () => {
  const slideFromLeft = document.getElementById("slideFromLeft");
  if (slideFromLeft) {
    if (slideFromLeft) {
      slideFromLeft.classList.contains("-translate-x-[100%]");
      slideFromLeft.classList.remove("-translate-x-[100%]");
      slideFromLeft.classList.add("-translate-x-[0]");
    } else {
      slideFromLeft.classList.remove("-translate-x-[0]");
      slideFromLeft.classList.add("-translate-x-[100%]");
    }
  }
};

export default { slideFromRight, slideFromLeft };
