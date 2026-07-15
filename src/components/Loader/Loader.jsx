import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2>Fetching Weather...</h2>
    </div>
  );
};

export default Loader;