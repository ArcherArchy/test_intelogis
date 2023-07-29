import { MapContainer, TileLayer } from "react-leaflet";
import "./index.css";
import { Polyline } from "react-leaflet/Polyline";
import { Marker } from "react-leaflet/Marker";
import { DEFAULT_ROUTES } from "../../constants";
import { useSelectedRoute } from "../../hooks/useSelectedRoute";
import { useDeterminedRoute } from "../../hooks/useDeterminedRoute";

const Map = () => {
  const defaultPosition = DEFAULT_ROUTES[0].routePoint1.split(", ");

  const [selectedRoute] = useSelectedRoute();
  const [determinedRoute] = useDeterminedRoute();

  return (
    <div className="map__container">
      <MapContainer center={defaultPosition} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {determinedRoute.coordinates ? (
          <Polyline
            key={1}
            positions={determinedRoute.coordinates}
            color={"red"}
          />
        ) : (
          <></>
        )}

        {selectedRoute.value ? (
          <>
            <Marker
              key={2}
              position={selectedRoute.value.routePoint1.split(", ")}
            />
            <Marker
              key={3}
              position={selectedRoute.value.routePoint2.split(", ")}
            />
            <Marker
              key={4}
              position={selectedRoute.value.routePoint3.split(", ")}
            />
          </>
        ) : (
          <></>
        )}
      </MapContainer>
    </div>
  );
};
export default Map;
