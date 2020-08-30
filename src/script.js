import About from "./pages/about";
import Home from "./pages/home";
import Page from "./pages/page";

function onRouteChanged() {
  const hash = window.location.hash;
  const routerView = document.getElementById("app");

  if (!(routerView instanceof HTMLElement)) {
    throw new ReferenceError("No router view element available for rendering");
  }

  switch (hash) {
    case "#home":
      routerView.innerHTML = `${Home()}`;
      break;

    case "#about":
      routerView.innerHTML = `${About()}`;
      break;

    default:
      routerView.innerHTML = `${Page()}`;
      break;
  }
}

window.addEventListener("hashchange", onRouteChanged);
