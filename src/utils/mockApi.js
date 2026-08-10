import events from "../data/events.json";

export const fetchEvents = () => {
   return new Promise((resolve) => {
      setTimeout(() => resolve(events), 900);
  });
};
