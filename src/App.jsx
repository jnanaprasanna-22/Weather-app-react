import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getWeather,
  getForecast,
} from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Forecast from "./components/Forecast/Forecast";
import Highlights from "./components/Highlights/Highlights";
import SearchHistory from "./components/SearchHistory/SearchHistory";
// import Favorites from "./components/Favorites/Favorites";

function App() {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);

      const weatherData = await getWeather(cityName);

      const forecastData = await getForecast(cityName);

      setWeather(weatherData);

      setForecast(forecastData);
      const updatedHistory = [
        cityName,
        ...history.filter((item) => item !== cityName),
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );

      toast.success("Weather Updated");
    } catch {
      toast.error("City Not Found");
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      fetchWeather(city);
    }, []);
    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);
    useEffect(() => {
      document.body.style.background = darkMode
        ? "#0f172a"
        : "#e0f2fe";
    }, [darkMode]);

  const weatherCondition =
  weather?.weather[0]?.main || "";
  
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  // const [favorites, setFavorites] = useState([]);

  return (
    <div
      className={`app
      ${darkMode ? "dark" : ""}
      ${weatherCondition.toLowerCase()}`}
    >
      <ToastContainer position="top-right" />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <SearchBox
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      <SearchHistory
        history={history}
        onSelect={(city) => {
          setCity(city);
          fetchWeather(city);
        }}
        clearHistory={() => {
          setHistory([]);
          localStorage.removeItem("history");
        }}
      />
      {/* <Favorites
        favorites={favorites}
        onSelect={(city) => {
          setCity(city);
          fetchWeather(city);
        }}
      /> */}

      {loading ? (
        <Loader />
      ) : (
         <>
            <WeatherCard weather={weather}/>
            <Highlights weather={weather}/>
            <Forecast forecast={forecast}/>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;