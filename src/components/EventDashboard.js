import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import EventItem from "./EventItem";

const EventDashboard = ({
  events,
  searchText,
  timeframe,
  eventType,
   watchlist,
   onSearchChange,
  onTimeframeChange,
  onTypeChange,
  onToggleWatchlist,
  onRegister
}) => (
  <section className="content-section">
    <div className="toolbar">
       <SearchBar searchText={searchText} onSearchChange={onSearchChange} />
      <FilterBar
         timeframe={timeframe}
        eventType={eventType}
        onTimeframeChange={onTimeframeChange}
        onTypeChange={onTypeChange}
      />
    </div>
    <div className="results-heading">
      <div>
        <p className="eyebrow">CURATED FOR YOU</p>
        <h2>{events.length} event{events.length !== 1 ? "s" : ""} found</h2>
      </div>
      {(searchText || timeframe !== "All" || eventType !== "All Types") && (
        <span className="filter-status">Filters active</span>
      )}
    </div>
    {events.length > 0 ? (
      <div className="event-grid">
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            isWatchlisted={watchlist.some((savedEvent) => savedEvent.id === event.id)}
            onToggleWatchlist={onToggleWatchlist}
            onRegister={onRegister}
          />
        ))}
      </div>
    ) : (
      <div className="empty-state">
        <span>⌕</span>
        <h2>No matching events</h2>
        <p>Try changing your search text or filters.</p>
      </div>
    )}
  </section>
);

export default EventDashboard;
