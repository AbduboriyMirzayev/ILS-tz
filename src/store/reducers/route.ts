import { createSlice, createAction } from "@reduxjs/toolkit";
import { TMapRoute } from "constants/mapRoutes";

interface RouteState {
  selectedRoutePoints: TMapRoute[];
  route: number[];
}

export const initialState: RouteState = {
  selectedRoutePoints: [],
  route: [],
};

const slice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setSelectedRoutePoints(state, action) {
      console.log(action.type);
      state.selectedRoutePoints = action.payload;
    },
    setRoute(state, action) {
      state.route = action.payload;
    },
  },
});

export const SET_ROUTES = "route/setRoute";
export const setRoutesSaga = createAction(SET_ROUTES);
export default slice.reducer;

export const { setSelectedRoutePoints, setRoute } = slice.actions;
