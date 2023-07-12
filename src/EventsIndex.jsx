export function EventsIndex(props) {
  return (
    <div id="events-index">
      <h1>Events Index</h1>
      {props.events.map((event) => (
        <div key={event.year}>{event.event}</div>
      ))}
    </div>
  );
}
