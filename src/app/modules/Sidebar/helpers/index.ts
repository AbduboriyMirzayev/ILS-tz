import { TMapRoute } from "constants/mapRoutes";

export const convertRoutesForTable = (routes: TMapRoute[]) => {
  return routes.map((route, i) => ({
    title: `Маршрут ${i + 1}`,
    pointes: route,
    key: i,
  }));
};
