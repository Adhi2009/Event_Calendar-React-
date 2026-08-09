const LoadingSpinner = () => (
  <div className="loading-state" role="status">
    <span className="spinner" />
    <h2>Finding great events...</h2>
    <p>Our mock API is loading the latest local events.</p>
  </div>
);

export default LoadingSpinner;
