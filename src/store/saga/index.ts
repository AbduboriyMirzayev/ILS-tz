import { put, takeEvery, call } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import { TMapRoute } from "constants/mapRoutes";
import { getRoute } from "api";
import { SET_ROUTES, setRoute, setRoutesSaga } from "store/reducers/route";

type TFetchRoute = {
  type: string;
  action: { points: TMapRoute };
};

function* fetchRoute({ action }: TFetchRoute): any {
  try {
    var routes: any = yield getRoute(action.points);
    const formatedRoutes = routes?.waypoints?.map((w: any) => ({
      lat: w.location[0],
      lng: w.location[1],
    }));
    yield put(setRoute(formatedRoutes));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: "" });
  }
}

export function* sagas() {
  yield takeEvery(SET_ROUTES as any, fetchRoute);
}
