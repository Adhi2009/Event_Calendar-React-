import { useEffect, useState } from "react";
import CalendarView from "../components/CalendarView";
import EventItem from "../components/EventItem";
import { fetchEvents } from "../utils/mockApi";

const EventCalendar = ({ watchlist, onToggleWatchlist, onRegister }) => {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 7, 1));
  const [selectedDate, setSelectedDate] = useState("2026-08-05");

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const changeMonth = (value) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + value;
    setCurrentMonth(new Date(year, month, 1));
    setSelectedDate("");
  };

  const selectedEvents = events.filter((event) => event.date === selectedDate);
  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  return (
    <section className="content-section">
      <div className="page-heading">
        <h1>Event Calendar</h1>
        <p>Click a date to view its events.</p>
      </div>

      <div className="calendar-panel">
        <div className="calendar-toolbar">
          <button onClick={() => changeMonth(-1)}>Previous</button>
          <h2>{monthName}</h2>
          <button onClick={() => changeMonth(1)}>Next</button>
        </div>

        <CalendarView
          currentMonth={currentMonth}
          events={events}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>

      <h2 className="selected-title">Events on Selected Date</h2>
      {selectedEvents.length > 0 ? (
        <div className="event-grid">
          {selectedEvents.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              isWatchlisted={watchlist.some((item) => item.id === event.id)}
              onToggleWatchlist={onToggleWatchlist}
              onRegister={onRegister}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">No events on this date.</p>
      )}
    </section>
  );
};

export default EventCalendar;
