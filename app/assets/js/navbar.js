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
      navbarWidth: "w-[250px]",
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
    isCollapsed ? "w-[55px]" : "w-[250px]",
    currentState.navbarWidth,
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
