import { useEffect, useState } from "react";
import EventDashboard from "../components/EventDashboard";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchEvents } from "../utils/mockApi";

const ExploreEvents = ({ watchlist, onToggleWatchlist, onRegister }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [timeframe, setTimeframe] = useState("All");
  const [eventType, setEventType] = useState("All Types");

  useEffect(() => {
    fetchEvents().then((data) => {
        setEvents(data);
        setLoading(false);
    });
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesName = event.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesType = eventType === "All Types" || event.type === eventType;

    // The demo data is in one month. These simple options are kept for practice.
    const matchesTime = timeframe === "All" || timeframe === "This Month";
    return matchesName && matchesType && matchesTime;
  });

  return (
    <>
      <section className="hero">
        <h1>Discover Local Events</h1>
        <p>Search, save and register for events in one simple place.</p>
      </section>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <EventDashboard
          events={filteredEvents}
          searchText={searchText}
          timeframe={timeframe}
          eventType={eventType}
          watchlist={watchlist}
          onSearchChange={setSearchText}
          onTimeframeChange={setTimeframe}
          onTypeChange={setEventType}
          onToggleWatchlist={onToggleWatchlist}
          onRegister={onRegister}
        />
      )}
    </>
  );
};

export default ExploreEvents;
