import axios from "axios";
import { EventsIndex } from "./EventsIndex";
import { DateInput } from "./DateInput";
import { useState } from "react";

export function Content() {
  const [events, setEvents] = useState([]);

  // EVENTS INDEX
  const handleIndexEvents = params => {
    console.log(params);
    axios.post("http://localhost:3000/dates.json", params).then(response => {
      console.log(response.data);
      setEvents(response.data);
    });
  };

  // const handleIndexEvents = () => {
  //   axios.get("http://localhost:3000/dates.json").then(response => {
  //     console.log(response.data);
  //     setEvents(response.data);
  //   });
  // };

  //   axios
  //     .get("https://historical-events-by-api-ninjas.p.rapidapi.com/v1/historicalevents", {
  //       params: {
  //         month: "3",
  //         day: "30",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key": "50a024a574msh462873517c4ab94p1896fajsn1b1276bd85e1",
  //         "X-RapidAPI-Host": "historical-events-by-api-ninjas.p.rapidapi.com",
  //       },
  //     })
  //     .then(function(response) {
  //       console.log(response.data);
  //       setEvents(response.data);
  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
  //   // setEvents(response.data);
  // };

  // useEffect(handleIndexEvents, []);

  return (
    <div>
      <DateInput onSubmitParams={handleIndexEvents} />
      <EventsIndex events={events} />
    </div>
  );
}
