import axios from "axios";
import { TMapRoute } from "constants/mapRoutes";

export const axiosInsert = axios.create({
  baseURL: "http://router.project-osrm.org/route/v1/driving/",
});

const formatPoints = (points: TMapRoute) =>
  points.reduce((acc, { lat, lng }) => acc + `${lat},${lng};`, "");

export const getRoute = (points: TMapRoute) => {
  return axiosInsert
    .get(
      formatPoints(points ?? []).slice(0, -1) +
        "?overview=false&alternatives=true&steps=true"
    )
    .then((res) => res.data);
};
