import "./SearchBox.css";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

const SearchBox = ({
  city,
  setCity,
  fetchWeather,
}) => {

  const currentLocation = () => {

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {

        fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=57c6252ebc575732c68409e146a059c0&units=metric`
        )
          .then((res) => res.json())
          .then((data) => {

            setCity(data.name);

            fetchWeather(data.name);

          });

      }
    );

  };

  return (

    <div className="search-container">

      <div className="search-box">

        <input

          type="text"

          placeholder="Search any city..."

          value={city}

          onChange={(e)=>setCity(e.target.value)}

          onKeyDown={(e)=>{

            if(e.key==="Enter"){

              fetchWeather(city);

            }

          }}

        />

        <button onClick={()=>fetchWeather(city)}>

          <FaSearch/>

        </button>

      </div>

      <button

      className="location-btn"

      onClick={currentLocation}

      >

        <FaLocationArrow/>

        Current Location

      </button>

    </div>

  );

};

export default SearchBox;