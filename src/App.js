import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RegistrationModal from "./components/RegistrationModal";
import ExploreEvents from "./pages/ExploreEvents";
import Watchlist from "./pages/Watchlist";
import EventCalendar from "./pages/EventCalendar";

const App = () => {
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("redDragonWatchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  const [registrationEvent, setRegistrationEvent] = useState(null);

  const toggleWatchlist = (event) => {
    const isAlreadySaved = watchlist.some((savedEvent) => savedEvent.id === event.id);

    if (isAlreadySaved) {
      setWatchlist(watchlist.filter((savedEvent) => savedEvent.id !== event.id));
    } else {
      setWatchlist([...watchlist, event]);
    }
  };

  useEffect(() => {
    localStorage.setItem("redDragonWatchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <div className="app-shell">
      <Header watchlistCount={watchlist.length} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ExploreEvents
                watchlist={watchlist}
                onToggleWatchlist={toggleWatchlist}
                onRegister={setRegistrationEvent}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                onToggleWatchlist={toggleWatchlist}
                onRegister={setRegistrationEvent}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <EventCalendar
                watchlist={watchlist}
                onToggleWatchlist={toggleWatchlist}
                onRegister={setRegistrationEvent}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>Built by Team Red Dragon · Discover. Connect. Experience.</p>
      </footer>
      {registrationEvent && (
        <RegistrationModal
          event={registrationEvent}
          onClose={() => setRegistrationEvent(null)}
        />
      )}
    </div>
  );
};

export default App;
