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

export default { slideFromRight };
