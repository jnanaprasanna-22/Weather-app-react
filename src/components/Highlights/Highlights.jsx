import "./Highlights.css";

import {
  FaTemperatureHigh,
  FaEye,
  FaCompressArrowsAlt,
  FaCloud,
} from "react-icons/fa";

import {
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";

import { formatTime } from "../../utils/formatTime";

const Highlights = ({ weather }) => {
  if (!weather) return null;

  const cards = [
    {
      icon: <FaTemperatureHigh />,
      title: "Feels Like",
      value: `${Math.round(weather.main.feels_like)}°C`,
    },

    {
      icon: <WiHumidity />,
      title: "Humidity",
      value: `${weather.main.humidity}%`,
    },

    {
      icon: <WiStrongWind />,
      title: "Wind Speed",
      value: `${Math.round(weather.wind.speed * 3.6)} km/h`,
    },

    {
      icon: <FaEye />,
      title: "Visibility",
      value: `${weather.visibility / 1000} km`,
    },

    {
      icon: <FaCloud />,
      title: "Cloudiness",
      value: `${weather.clouds.all}%`,
    },

    {
      icon: <FaCompressArrowsAlt />,
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
    },

    {
      icon: <WiSunrise />,
      title: "Sunrise",
      value: formatTime(weather.sys.sunrise),
    },

    {
      icon: <WiSunset />,
      title: "Sunset",
      value: formatTime(weather.sys.sunset),
    },
    {
      icon: "📍",
      title: "Coordinates",
      value: `${weather.coord.lat.toFixed(2)}, ${weather.coord.lon.toFixed(2)}`,
    },
  ];

  return (
    <section className="highlights">
      <h2>Today's Highlights</h2>

      <div className="highlights-grid">
        {cards.map((card, index) => (
          <div className="highlight-card" key={index}>
            <div className="highlight-icon">
              {typeof card.icon === "string" ? (
                <span>{card.icon}</span>
              ) : (
                card.icon
              )}
            </div>

            <h3>{card.title}</h3>

            <p>{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;