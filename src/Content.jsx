import axios from "axios";
import { EventsIndex } from "./EventsIndex";
import { DateInput } from "./DateInput";
import { useEffect, useState } from "react";

export function Content() {
  const [events, setEvents] = useState([]);
  // EVENTS INDEX
  const handleIndexEvents = () => {
    axios.get("http://localhost:3000/dates.json").then(response => {
      console.log(response.data);
      setEvents(response.data);
    });
  };

  useEffect(handleIndexEvents, []);

  return (
    <div>
      <DateInput />
      <EventsIndex events={events} />
    </div>
  );
}
