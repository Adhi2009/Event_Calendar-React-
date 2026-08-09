import { Link } from "react-router-dom";
import EventItem from "../components/EventItem";

const Watchlist = ({ watchlist, onToggleWatchlist, onRegister }) => (
  <section className="content-section watchlist-page">
    <div className="page-heading">
      <p className="eyebrow">YOUR SAVED EVENTS</p>
      <h1>My Watchlist</h1>
      <p>Keep the events you care about together, then register when you're ready.</p>
    </div>
    {watchlist.length > 0 ? (
      <div className="event-grid">
        {watchlist.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            isWatchlisted={true}
            onToggleWatchlist={onToggleWatchlist}
            onRegister={onRegister}
          />
        ))}
      </div>
    ) : (
      <div className="empty-state large-empty">
        <span>♡</span>
        <h2>Your watchlist is empty</h2>
        <p>Save interesting events and they will appear here.</p>
        <Link className="button button-primary" to="/">Explore events</Link>
      </div>
    )}
  </section>
);

export default Watchlist;
