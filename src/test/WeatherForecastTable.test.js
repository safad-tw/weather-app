import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import WeatherForecastTable from './../components/WeatherTable/WeatherForecastTable';

Enzyme.configure({ adapter: new Adapter() })

describe('WeatherForecastTable', () => {
  it('should render weather forecast table', () => {

    const data = [{
        "coord": {
            "lon": 55.3,
            "lat": 25.26
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.15,
            "feels_like": 301.69,
            "temp_min": 300.93,
            "temp_max": 301.48,
            "pressure": 1015,
            "humidity": 54
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 80
        },
        "clouds": {
            "all": 20
        },
        "dt": 1605428296,
        "sys": {
            "type": 1,
            "id": 7537,
            "country": "AE",
            "sunrise": 1605407765,
            "sunset": 1605447060
        },
        "timezone": 14400,
        "id": 292223,
        "name": "Dubai",
        "cod": 200
    },{
        "coord": {
            "lon": 55.3,
            "lat": 25.26
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.15,
            "feels_like": 301.69,
            "temp_min": 300.93,
            "temp_max": 301.48,
            "pressure": 1015,
            "humidity": 54
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 80
        },
        "clouds": {
            "all": 20
        },
        "dt": 1605428296,
        "sys": {
            "type": 1,
            "id": 7537,
            "country": "AE",
            "sunrise": 1605407765,
            "sunset": 1605447060
        },
        "timezone": 14400,
        "id": 292223,
        "name": "Dubai",
        "cod": 200
    }];
    const headers = ["header-1","header-2"]
    const wrapper = shallow(
        <WeatherForecastTable headers={headers} weather={data}/>
    );
    expect(wrapper).toBeTruthy();

  })

  it('should render weather forecast table header', () => {

    const data = [{
        "coord": {
            "lon": 55.3,
            "lat": 25.26
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.15,
            "feels_like": 301.69,
            "temp_min": 300.93,
            "temp_max": 301.48,
            "pressure": 1015,
            "humidity": 54
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 80
        },
        "clouds": {
            "all": 20
        },
        "dt": 1605428296,
        "sys": {
            "type": 1,
            "id": 7537,
            "country": "AE",
            "sunrise": 1605407765,
            "sunset": 1605447060
        },
        "timezone": 14400,
        "id": 292223,
        "name": "Dubai",
        "cod": 200
    },{
        "coord": {
            "lon": 55.3,
            "lat": 25.26
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.15,
            "feels_like": 301.69,
            "temp_min": 300.93,
            "temp_max": 301.48,
            "pressure": 1015,
            "humidity": 54
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 80
        },
        "clouds": {
            "all": 20
        },
        "dt": 1605428296,
        "sys": {
            "type": 1,
            "id": 7537,
            "country": "AE",
            "sunrise": 1605407765,
            "sunset": 1605447060
        },
        "timezone": 14400,
        "id": 292223,
        "name": "Dubai",
        "cod": 200
    }];
    const headers = ["header-1","header-2"]
    const wrapper = shallow(
        <WeatherForecastTable headers={headers} weather={data}/>
    );
    expect(wrapper).toBeTruthy();
    const th = wrapper.find('th')
    expect(th).toHaveLength(2)
   
  })

  it('should render weather forecast table row', () => {

    const data = [{
        "coord": {
            "lon": 55.3,
            "lat": 25.26
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.15,
            "feels_like": 301.69,
            "temp_min": 300.93,
            "temp_max": 301.48,
            "pressure": 1015,
            "humidity": 54
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 80
        },
        "clouds": {
            "all": 20
        },
        "dt": 1605428296,
        "sys": {
            "type": 1,
            "id": 7537,
            "country": "AE",
            "sunrise": 1605407765,
            "sunset": 1605447060
        },
        "timezone": 14400,
        "id": 292223,
        "name": "Dubai",
        "cod": 200
    },{
        "coord": {
            "lon": 55.3,
            "lat": 25.26
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.15,
            "feels_like": 301.69,
            "temp_min": 300.93,
            "temp_max": 301.48,
            "pressure": 1015,
            "humidity": 54
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 80
        },
        "clouds": {
            "all": 20
        },
        "dt": 1605428296,
        "sys": {
            "type": 1,
            "id": 7537,
            "country": "AE",
            "sunrise": 1605407765,
            "sunset": 1605447060
        },
        "timezone": 14400,
        "id": 292223,
        "name": "Dubai",
        "cod": 200
    }];
    const headers = ["header-1","header-2"]
    const wrapper = shallow(
        <WeatherForecastTable headers={headers} weather={data}/>
    );
    expect(wrapper).toBeTruthy();
    const tr = wrapper.find('tr')
    expect(tr).toHaveLength(3)
   
  })
 
})