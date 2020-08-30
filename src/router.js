const replaceInnerHtmlWithNewPage = (response, page, element) => {
  if (response.ok) {
    element.innerHTML = page;
  }
};

const loadPage = async (pageName, routerViewId) => {
  const element = document.getElementById(routerViewId);
  const response = await fetch(`src/pages/${pageName}.html`);
  const page = await response.text();
  replaceInnerHtmlWithNewPage(response, page, element);
};

const getNewRoute = (routes, defaultRoute) =>
  routes.find((route) => window.location.hash.replace("#", "") === route) ||
  defaultRoute;

export const enableRouting = (routes, defaultRoute, routerViewId) => {
  loadPage(getNewRoute(routes, defaultRoute), routerViewId);
  window.addEventListener("hashchange", () =>
    loadPage(getNewRoute(routes, defaultRoute), routerViewId)
  );
};
