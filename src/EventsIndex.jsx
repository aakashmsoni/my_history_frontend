export function EventsIndex(props) {
  return (
    <div id="events-index">
      <h1>
        {props.events[0] === undefined ? (
          <div>
            <h3>select a date</h3>
          </div>
        ) : (
          <div>
            {props.events[0].month}/{props.events[0].day}
          </div>
        )}
      </h1>
      {props.events.map(event => (
        <div key={event.year}>
          {event.year} - {event.event}
        </div>
      ))}
    </div>
  );
}
