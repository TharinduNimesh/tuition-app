import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => {
    let routesDirectory: any = null;
    const { ssrContext } = useNuxtApp();

    // check for subdomain in the url on the server
    if (process.server && ssrContext && ssrContext.event.node.req) {
      const req = ssrContext.event.node.req;
      const subdomain = req.headers.host?.split(".")[0];
      if (
        subdomain !== "www" &&
        subdomain !== "localhost" &&
        subdomain !== "localhost:3000" &&
        subdomain !== "classmate"
      ) {
        routesDirectory = "sub-domain";
      } else {
        routesDirectory = "root-domain";
      }
    }

    // check for subdomain in the url on the client
    if (process.client && window.location.hostname) {
      const subdomain = window.location.hostname.split(".")[0];
      if (
        subdomain !== "www" &&
        subdomain !== "localhost" &&
        subdomain !== "localhost:3000" &&
        subdomain !== "classmate"
      ) {
        routesDirectory = "sub-domain";
      } else {
        routesDirectory = "root-domain";
      }
    }

    // function to clear a directory not in use
    function isUnderDirectory(route: any, directory: any) {
      const path = route.path;
      return path === "/" + directory || path.startsWith("/" + directory + "/");
    }

    let newRoutes = _routes;

    if (routesDirectory) {
      // filter routes
      newRoutes = _routes
        .filter((route: any) => {
          const toRemove =
            routesDirectory === "sub-domain" ? "root-domain" : "sub-domain";
          return !isUnderDirectory(route, toRemove);
        })
        .map((route: any) => {
          if (isUnderDirectory(route, "sub-domain")) {
            return {
              ...route,
              path: route.path.replace("/sub-domain", "/"),
              name: route.name || "index",
            };
          } else if (isUnderDirectory(route, "root-domain")) {
            return {
              ...route,
              path: route.path.substr(routesDirectory.length + 1) || "/",
              name: route.name || "index",
            };
          }
        });

      return newRoutes;
    }
  },
};
