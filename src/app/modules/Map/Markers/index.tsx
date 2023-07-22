import mapRoutes from "constants/mapRoutes";
import { Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

function Markers() {
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
    </div>
  );
}

export default Markers;
