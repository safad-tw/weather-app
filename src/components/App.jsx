import React from 'react';
import { connect } from "react-redux";
import { convertToCelcius } from "../helpers/celciusConverter";
import "./App.css";
import { weatherFetchData } from "../actions/weatherFetchActions";
import WeatherForecastTable from "./WeatherTable/WeatherForecastTable";


class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      weather: [],
      currentWeather: undefined
    };
    this.search = this.search.bind(this);
    this.renderWeatherData = this.renderWeatherData.bind(this);
    this.renderTableData = this.renderTableData.bind(this)
    this.renderWeatherForecast = this.renderWeatherForecast.bind(this)

  }

  componentWillReceiveProps(newProps) {
    if (newProps.weather !== "undefined" && newProps.weather.length > 0) {
      this.setState({ weather: newProps.weather, currentWeather: newProps.weather[0] })
    }
  }

  search(e) {
    if (e.key === 'Enter' && this.state.inputValue !== "") {
      this.props.fetchData(this.state.inputValue);
    }
  }

  dateBuild(d) {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }

  openWeatherMap(weather) {
    console.log("weather", weather)
    window.open('/weather', '_blank')
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  renderTableData() {
    let header = ["City", "Temp", "Min", "Max", "Feels Like"];
    return (<WeatherForecastTable headers={header} weather={this.state.weather} />)
  }

  renderWeatherForecast() {
    return <main>
      <div className="search-container">
        <div className="search-label-container">
          Enter City Name:
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={evt => this.updateInputValue(evt)}
            value={this.inputValue}
            onKeyPress={this.search}
          />
        </div>
      </div>
      {(
        <div>
          <div className="location-container">
            <div className="location">
              {(typeof this.state.currentWeather != "undefined") ? (this.state.currentWeather.name) : ""}

            </div>
            <div className="date"> {this.dateBuild(new Date())}</div>
          </div>
          {this.state.currentWeather &&
            <div className="weather-container">
              <div className="temperature">
                {this.state.currentWeather && Math.round(convertToCelcius(this.state.currentWeather.main.temp))}°C
            </div>
              <div className="weather">
                {this.state.currentWeather && this.state.currentWeather.weather[0].main}
              </div>
            </div>}
          <div>
            <div>
              {this.state.currentWeather && this.renderTableData()}
            </div>
          </div>
        </div>
      )}
    </main>
  }

  renderWeatherData() {
    return (<div
      className={
        (typeof this.state.currentWeather != "undefined" && typeof this.state.currentWeather.main != "undefined")
          ? Math.round(convertToCelcius(this.state.currentWeather.main.temp)) > 18
            ? "App hot"
            : "App cold"
          : "App"
      }
    >
      {this.renderWeatherForecast()}
    </div>);
  }

  render() {
    return (
      <div>
        {this.renderWeatherData()}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weatherData,
    hasErrored: state.isWeatherDataHasErrored,
    isLoading: state.isWeatherDataLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: searchText => dispatch(weatherFetchData(searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
