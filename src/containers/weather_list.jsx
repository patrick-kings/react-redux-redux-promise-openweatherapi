import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
  renderWeather(cityData) {
    let date = new Date();

    const temps = cityData.list.map(weather => weather.main.temp);
    let pressures = cityData.list.map(weather => weather.main.pressure);
    let humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.name + date.getTime()}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color="orange" units=" K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units=" hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units=" %" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather: weather };
  //    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
