import mapRoutes from "constants/mapRoutes";
import { Marker, useMapEvents, Polyline } from "react-leaflet";
import L from "leaflet";
import { useAppSelector } from "hooks/storeHooks";

function Markers() {
  const { route } = useAppSelector((state) => state.route);

  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
    },
  });

  var myFGMarker = new L.FeatureGroup();
  mapRoutes[0].forEach((r) => {
    const marker = L.marker(r);
    myFGMarker.addLayer(marker);
  });
  myFGMarker.addTo(map);

  map.fitBounds(myFGMarker.getBounds());

  return (
    <div>
      {mapRoutes[0].map((latlang) => (
        <Marker position={latlang} />
      ))}
      {/* {route?.length && ( */}
      <Polyline
        positions={[
          { lat: 59.983762, lng: 30.311365 },
          { lat: 59.98923, lng: 30.313126 },
          { lat: 59.994342, lng: 30.318571 },
        ]}
        color="red"
      />
      {/* )} */}
    </div>
  );
}

export default Markers;
