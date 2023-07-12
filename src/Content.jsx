import axios from "axios";
import { EventsIndex } from "./EventsIndex";
import { useEffect, useState } from "react";
// import { useState, useEffect } from "react";

export function Content() {
  const [events, setEvents] = useState([]);
  // EVENTS INDEX
  const handleIndexEvents = () => {
    axios.get("http://localhost:3000/dates.json").then((response) => {
      console.log(response);
      setEvents(response.data);
    });
  };

  useEffect(handleIndexEvents, []);

  return (
    <div>
      <h1>Welcome to MyHistory!</h1>
      <EventsIndex events={events} />
    </div>
  );
}
