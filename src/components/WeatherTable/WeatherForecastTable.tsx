import React from 'react';
import { convertToCelcius } from "../..//helpers/celciusConverter";
import "./weather-table.css";

type WeatherForecastTableProps = {
    headers: [String],
    weather: [any]
}

export default class WeatherForecastTable extends React.Component<WeatherForecastTableProps> {
    
    /* Render table header */
    renderTableHeader() {
        return this.props.headers.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    }
    /* Render table rows */
    renderTableData() {
        return this.props.weather.map((weatherinfo, index) => {
            return (
                    <tr key={index} onClick={() => {
                        localStorage.setItem('weatherapp-weatherdata', JSON.stringify(weatherinfo));
                        window.open('/weather', '_blank')
                    }
                    }>
                        <td>{weatherinfo.name}</td>
                        <td>{Math.round(convertToCelcius(weatherinfo.main.temp))} °C</td>
                        <td>{Math.round(convertToCelcius(weatherinfo.main.temp_min))} °C</td>
                        <td>{Math.round(convertToCelcius(weatherinfo.main.temp_max))} °C</td>
                        <td>{weatherinfo.weather[0].main}</td>
                    </tr>
            )
        });
    }

     /* Render */
    render() {
            return (
                <div className="weather-forecast-table-container">
                    <table id='weather-table'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                             {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            );
    
    }
}