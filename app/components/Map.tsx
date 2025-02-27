import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new URL(
  "leaflet/dist/images/marker-icon.png",
  import.meta.url
).href;
const markerIcon2x = new URL(
  "leaflet/dist/images/marker-icon-2x.png",
  import.meta.url
).href;
const markerShadow = new URL(
  "leaflet/dist/images/marker-shadow.png",
  import.meta.url
).href;

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface MapProps {
  center?: number[];
}

function Map({ center }: MapProps) {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  );
}

export default Map;
