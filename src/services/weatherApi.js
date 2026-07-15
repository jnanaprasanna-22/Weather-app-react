import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (city) => {
  const res = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};

export const getForecast = async (city) => {
  const res = await axios.get(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};

export const getCurrentLocationWeather = async (lat, lon) => {
  const res = await axios.get(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return res.data;
};