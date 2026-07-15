import "./WeatherCard.css";
import {
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

import {
  FaTemperatureHigh,
  FaEye,
  FaCompressArrowsAlt,
} from "react-icons/fa";

import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">

      <div className="top">

        <div>

          <h1>{weather.name}</h1>

          <h3>{weather.sys.country}</h3>

          <p>{formatDate(Date.now())}</p>

        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt="weather"
        />

      </div>

      <div className="temperature">

        <h1>{Math.round(weather.main.temp)}°C</h1>

        <p>{weather.weather[0].description}</p>

      </div>

      <div className="details">

        <div className="detail">

          <FaTemperatureHigh />

          <span>Feels Like</span>

          <h4>{Math.round(weather.main.feels_like)}°C</h4>

        </div>

        <div className="detail">

          <WiHumidity />

          <span>Humidity</span>

          <h4>{weather.main.humidity}%</h4>

        </div>

        <div className="detail">

          <WiStrongWind />

          <span>Wind</span>

          <h4>{weather.wind.speed} m/s</h4>

        </div>

        <div className="detail">

          <FaEye />

          <span>Visibility</span>

          <h4>{weather.visibility / 1000} km</h4>

        </div>

        <div className="detail">

          <FaCompressArrowsAlt />

          <span>Pressure</span>

          <h4>{weather.main.pressure} hPa</h4>

        </div>

        <div className="detail">

          <WiSunrise />

          <span>Sunrise</span>

          <h4>{formatTime(weather.sys.sunrise)}</h4>

        </div>

        <div className="detail">

          <WiSunset />

          <span>Sunset</span>

          <h4>{formatTime(weather.sys.sunset)}</h4>

        </div>

      </div>

    </div>
  );
};

export default WeatherCard;