import "./SearchHistory.css";

const SearchHistory = ({ history, onSelect, clearHistory }) => {
  if (history.length === 0) return null;

  return (
    <div className="history">
      <div className="history-header">
        <h2>Recent Searches</h2>

        <button onClick={clearHistory}>
          Clear
        </button>
      </div>

      <div className="history-list">
        {history.map((city, index) => (
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

export default SearchHistory;