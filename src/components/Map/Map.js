import React, { useRef, useState, useEffect } from "react";
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import { convertToCelcius } from "../../helpers/celciusConverter";

const Map = ({ children, zoom, center, weather }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
     // Added marker.
    let overlayMarker = new ol.Overlay({
      position: center,
      positioning: "center-center",
      element: document.getElementById("marker"),
      stopEvent: false
    });

    // Added info box to show weather details.
    let overlayInfobox = new ol.Overlay({
      position: center,
      positioning: "bottom-center",
      element: document.getElementById("info"),
      stopEvent: false
    });

    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [overlayMarker, overlayInfobox]
    };
    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, [center, map, zoom]);

  // zoom change handler
  useEffect(() => {
    if (!map) return;

    map.getView().setZoom(zoom);
  }, [zoom]);

  // center change handler
  useEffect(() => {
    if (!map) return;

    map.getView().setCenter(center);
  }, [center]);

   // Load render
  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
        <div
          id="marker"
          title="Marker"
          className="marker"
        />
        {weather && (
          <div
            id="info"
            title="info"
            className="info-box1"
          >
            <div> {
              `${weather.name}, ${weather.weather[0].description}.   ${Math.round(convertToCelcius(weather.main.temp))} °С`}
            </div>
          </div>
        )}
      </div>
    </MapContext.Provider>
  );
};

export default Map;
