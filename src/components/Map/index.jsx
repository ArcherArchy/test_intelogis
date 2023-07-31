import { useRef, useEffect, useState } from "react";
import { Polyline } from "react-leaflet/Polyline";
import { Marker } from "react-leaflet/Marker";
import { TileLayer, useMap, MapContainer } from "react-leaflet";

import { DEFAULT_ROUTES } from "../../constants";
import { useSelectedRoute } from "../../hooks/useSelectedRoute";
import { useDeterminedRoute } from "../../hooks/useDeterminedRoute";
import MapWrapper from "./MapContainer";
import "./index.css";

const Map = () => {
  const [selectedRoute] = useSelectedRoute();
  const [determinedRoute] = useDeterminedRoute();
  const map = useMap()

  const bb = [
    ["59.82934196", "30.42423701"],
    ["59.82761295", "30.41705607"],
    ["59.84660399", "30.29496392"],
  ];
  map.fitBounds(bb)
  
  const defaultPosition = DEFAULT_ROUTES[0].routePoint1.split(", ");

  useEffect(() => {
    map.fitBounds(determinedRoute?.coordinates || bb)
  }, [selectedRoute]);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline
        key={1}
        positions={determinedRoute?.coordinates || []}
        color={"red"}
      />

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
      </>
  );
};
export default Map;
