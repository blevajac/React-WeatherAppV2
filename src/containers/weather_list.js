import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    const { lon, lat } = cityData.city.coord;  //jednostavnije pisanje
    // const lon = cityData.city.cord.lon;
    // const lat = cityData.city.cord.lat;

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
            <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
            <Chart data={temps} color="orange" units="°C" />
        </td>
        <td>
            <Chart data={pressures} color="blue" units="hPa" />
        </td>
        <td>
            <Chart data={humidities} color="green" units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Grad</th>
              <th>Slika Grada</th>
              <th>Temperatura (°C)</th>
              <th>Pritisak (hPa)</th>
              <th>Postotak vlage u zraku(%)</th>
            </tr>
          </thead>
          <tbody>
              {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
    );
  }
}

//redux
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
