import { TMapRoute } from "constants/mapRoutes";

export const findCenterBetweenPoints = (points: TMapRoute) => {
  const latlng = points.reduce(
    (acc, point) => {
      acc.lat += point.lat;
      acc.lng += point.lng;
      return acc;
    },
    { lat: 0, lng: 0 }
  );
  // const lat = (points[0].lat + points[points.length - 1].lat) / 2;
  return { lat: latlng.lat / points.length, lng: latlng.lng / points.length };
};
