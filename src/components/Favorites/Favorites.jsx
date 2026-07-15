import "./Favorites.css";

const Favorites = ({
  favorites,
  onSelect,
}) => {
  if (!favorites.length) return null;

  return (
    <div className="favorites">

      <h2>⭐ Favorite Cities</h2>

      <div className="favorite-list">
        {favorites.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
          >
            {city}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Favorites;