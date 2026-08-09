import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const formatDate = (date) => new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
}).format(new Date(`${date}T00:00:00`));

const EventItem = ({ event, isWatchlisted, onToggleWatchlist, onRegister }) => {
  const [rsvpStatus, setRsvpStatus] = useState(false);
  const { isLoggedIn, login } = useAuth();

  const requireLogin = (action) => {
    if (!isLoggedIn) {
      const shouldLogin = window.confirm(`Please log in to ${action}. Log in now?`);
      if (shouldLogin) login();
      return false;
    }
    return true;
  };

  const handleRsvp = () => {
    if (requireLogin("RSVP")) setRsvpStatus(!rsvpStatus);
  };

  const handleWatchlist = () => {
    if (requireLogin("change your watchlist")) onToggleWatchlist(event);
  };

  return (
    <article className="event-card">
      <div className={`event-visual ${event.accent}`}>
        <span className="event-type">{event.type}</span>
        <button
          className={`heart-button ${isWatchlisted ? "saved" : ""}`}
          onClick={handleWatchlist}
          aria-label={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
          title={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
        >
          {isWatchlisted ? "♥" : "♡"}
        </button>
        <span className="visual-letter">{event.name.charAt(0)}</span>
      </div>
      <div className="event-content">
        <div className="event-date">{formatDate(event.date)} · {event.time}</div>
        <h2>{event.name}</h2>
        <p className="location">⌖ {event.location}</p>
        <p className="description">{event.description}</p>
        <div className="event-footer">
          <strong>{event.price === 0 ? "Free" : `LKR ${event.price.toLocaleString()}`}</strong>
          <div className="card-actions">
            <button className={rsvpStatus ? "button rsvp-going" : "button button-light"} onClick={handleRsvp}>
              {rsvpStatus ? "✓ Going!" : "RSVP Now"}
            </button>
            <button className="button button-primary" onClick={() => onRegister(event)}>Register</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EventItem;
