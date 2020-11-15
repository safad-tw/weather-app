import React, { Component } from "react";
import Map from "./Map";
import { Layers, TileLayer } from "./Map/Layers";
import { osm } from "./Map/Source";
import { fromLonLat } from "ol/proj";
import { Controls, FullScreenControl } from "./Map/Controls";

class WeatherMap extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: JSON.parse(localStorage.getItem("weatherapp-weatherdata"))
    };
  }

  render() {
    const long =
      this.state.weatherData && this.state.weatherData.coord !== undefined
        ? this.state.weatherData.coord.lon
        : 0;
    const lat =
      this.state.weatherData && this.state.weatherData.coord !== undefined
        ? this.state.weatherData.coord.lat
        : 0;

    const center = [long, lat];
    const zoom = 9;
    return (
      <div>
        <Map
          center={fromLonLat(center)}
          zoom={zoom}
          weather={this.state.weatherData}
        >
          <Layers>
            <TileLayer source={osm()} zIndex={0} />
          </Layers>
          <Controls>
            <FullScreenControl />
          </Controls>
        </Map>
      </div>
    );
  }
}

export default WeatherMap;
