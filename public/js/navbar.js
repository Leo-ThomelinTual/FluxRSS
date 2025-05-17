export const navbarCollapse = () => {
  // Regrouper les sélecteurs au début pour éviter les requêtes DOM multiples
  const elements = {
    navbar: document.querySelector("#navbarCollapse"),
    collapseIcon: document.querySelector("#collapseIcon"),
    collapseIcon2: document.querySelector("#collapseIcon2"),
    dropdownFlux: document.querySelector("#dropdownFlux"),
    dropdown: document.querySelector("#dropdown"),
    arrowDownRotate: document.querySelector("#arrowDownRotate"),
    navbarTextContent: document.querySelectorAll("#contentNavbar"),
  };

  if (!elements.navbar) return;

  const isCollapsed = elements.navbar.classList.contains("w-[55px]");

  // Utiliser des objets pour définir les états
  const states = {
    expanded: {
      navbarWidth: "w-[max]",
      icon1: ["hidden", "flex"],
      icon2: ["flex", "hidden"],
      content: ["hidden", "flex"],
    },
    collapsed: {
      navbarWidth: "w-[55px]",
      icon1: ["flex", "hidden"],
      icon2: ["hidden", "flex"],
      content: ["flex", "hidden"],
    },
  };

  const currentState = isCollapsed ? states.expanded : states.collapsed;

  // Appliquer les changements
  elements.navbar.classList.replace(
    isCollapsed ? "w-[55px]" : "w-[max]",
    currentState.navbarWidth
  );

  elements.collapseIcon.classList.remove(currentState.icon1[0]);
  elements.collapseIcon.classList.add(currentState.icon1[1]);

  elements.collapseIcon2.classList.remove(currentState.icon2[0]);
  elements.collapseIcon2.classList.add(currentState.icon2[1]);

  if (!isCollapsed) {
    elements.dropdown.classList.remove("flex");
    elements.dropdown.classList.add("hidden");
    elements.dropdownFlux.classList.remove("hidden");
    elements.dropdownFlux.classList.add("flex");
    elements.arrowDownRotate.classList.remove("rotate-180");
  }

  elements.navbarTextContent.forEach((element) => {
    element.classList.remove(currentState.content[0]);
    element.classList.add(currentState.content[1]);
  });
};

export default { navbarCollapse };
//   const navbar = document.querySelector("#navbarCollapse");
//   const collapseIcon = document.querySelector("#collapseIcon");
//   const collapseIcon2 = document.querySelector("#collapseIcon2");
//   const dropdownFlux = document.querySelector("#dropdownFlux");
//   const navbarTextContent = document.querySelectorAll("#contentNavbar");
//   const dropdown = document.querySelector("#dropdown");
//   const arrowDownRotate = document.querySelector("#arrowDownRotate");
//   if (navbar) {
//     if (navbar.classList.contains("w-[55px]")) {
//       navbar.classList.remove("w-[55px]");
//       navbar.classList.add("w-[max]");
//       collapseIcon2.classList.remove("flex");
//       collapseIcon2.classList.add("hidden");
//       collapseIcon.classList.remove("hidden");
//       collapseIcon.classList.add("flex");
//       navbarTextContent.forEach((element) => {
//         element.classList.remove("hidden");
//         element.classList.add("flex");
//       });
//     } else {
//       navbar.classList.remove("w-[max]");
//       dropdown.classList.remove("flex");
//       dropdown.classList.add("hidden");
//       dropdownFlux.classList.remove("hidden");
//       dropdownFlux.classList.add("flex");
//       arrowDownRotate.classList.remove("rotate-180");
//       navbar.classList.add("w-[55px]");
//       collapseIcon2.classList.add("flex");
//       collapseIcon2.classList.remove("hidden");
//       collapseIcon.classList.add("hidden");
//       collapseIcon.classList.remove("flex");
//       navbarTextContent.forEach((element) => {
//         element.classList.remove("flex");
//         element.classList.add("hidden");
//       });
//     }
//   }
// };
