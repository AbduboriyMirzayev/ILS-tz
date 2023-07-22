import { ReactNode, useEffect, useState } from "react";
import Markers from "./Markers";
import { MapContainer, TileLayer } from "react-leaflet";
import { findCenterBetweenPoints } from "./helpers";
import mapRoutes from "constants/mapRoutes";

type Props = {
  center: { lat: number; lng: number };
  zoom?: number;
  children?: ReactNode;
};

const mapUrl =
  "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1";

function Map({ center, children, zoom }: Props) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, 0);
  }, []);

  return isRendered ? (
    <MapContainer
      zoomControl={false}
      center={findCenterBetweenPoints(mapRoutes[0])}
      zoom={zoom ?? 11}
    >
      <TileLayer
        // attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={mapUrl}
      />
      <Markers />
    </MapContainer>
  ) : null;
}

export default Map;
