import "./Forecast.css";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  // Get one forecast per day (around 12:00 PM)
  const dailyForecast = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">5-Day Forecast</h2>

      <div className="forecast-grid">
        {dailyForecast.map((day) => (
         <div className="forecast-card" key={day.dt}>
            <h3>
                {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                })}
            </h3>

            <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="icon"
            />

            <h4>{Math.round(day.main.temp)}°C</h4>

            <p>{day.weather[0].main}</p>

            <small>
                H:{Math.round(day.main.temp_max)}°
                {" "}
                L:{Math.round(day.main.temp_min)}°
            </small>

            {/* Extra Weather Info */}
            <div className="forecast-extra">
                <p>💧 {day.main.humidity}%</p>
                <p>💨 {Math.round(day.wind.speed * 3.6)} km/h</p>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;