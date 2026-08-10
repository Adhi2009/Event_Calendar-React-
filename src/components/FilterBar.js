import eventTypes from "../data/eventTypes.json";

const FilterBar = ({ timeframe, eventType, onTimeframeChange, onTypeChange }) => (
  <div className="filters" aria-label="Event filters">
    <div className="filter-group">
      <span className="filter-label">When</span>
      <div className="segmented-control">
        {["All", "This Week", "This Month"].map((option) => (
          <button
              key={option}
              className={timeframe === option ? "active" : ""}
            onClick={() => onTimeframeChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
    <label className="filter-group select-group">
      <span className="filter-label">Event type</span>
      <select value={eventType} onChange={(event) => onTypeChange(event.target.value)}>
        {eventTypes.map((type) => <option key={type}>{type}</option>)}
      </select>
    </label>
  </div>
);

export default FilterBar;
