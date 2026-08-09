const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const CalendarView = ({ currentMonth, events, selectedDate, onSelectDate }) => {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstWeekDay = new Date(year, month, 1).getDay();
  const numberOfDays = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let index = 0; index < firstWeekDay; index += 1) cells.push(null);
  for (let day = 1; day <= numberOfDays; day += 1) cells.push(new Date(year, month, day));
  while (cells.length % 7 !== 0) cells.push(null);

  const todayKey = toDateKey(new Date());

  return (
    <div className="calendar-grid" aria-label="Event calendar">
      {weekDays.map((day) => <div className="weekday" key={day}>{day}</div>)}
      {cells.map((date, index) => {
        if (!date) return <div className="calendar-day calendar-day-empty" key={`empty-${index}`} />;

        const dateKey = toDateKey(date);
        const dayEvents = events.filter((event) => event.date === dateKey);
        const isSelected = selectedDate === dateKey;
        const isToday = dateKey === todayKey;

        return (
          <button
            type="button"
            className={`calendar-day ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}`}
            key={dateKey}
            onClick={() => onSelectDate(dateKey)}
            aria-label={`${date.toLocaleDateString()}${dayEvents.length ? `, ${dayEvents.length} events` : ""}`}
          >
            <span className="day-number">{date.getDate()}</span>
            <span className="day-events">
              {dayEvents.slice(0, 2).map((event) => (
                <span className={`calendar-event-dot ${event.accent}`} key={event.id}>{event.name}</span>
              ))}
              {dayEvents.length > 2 && <small>+{dayEvents.length - 2} more</small>}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CalendarView;
