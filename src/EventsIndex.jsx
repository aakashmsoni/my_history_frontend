export function EventsIndex(props) {
  return (
    <div id="events-index">
      {props.events[0] === undefined ? (
        <div>
          <h3>select a date!</h3>
        </div>
      ) : (
        <div>
          <h1>
            {props.events[0].month}/{props.events[0].day}
          </h1>

          <div className="container w-50">
            <div id="carouselExample" className="carousel carousel-dark slide">
              <div className="carousel-inner">
                {props.events.map((event, i) => (
                  <div className={i === 0 ? "carousel-item text-center active" : "carousel-item text-center"} key={i}>
                    <div className="card">
                      <img src="/src/assets/carousel-bg.jpeg" className="card-img"></img>
                      <div className="card-img-overlay">
                        <h5 className="card-header">{event.year}</h5>
                        <div className="card-body text-center fs-4 fw-light">
                          {event.event}
                          {/* <footer className="footer">{event.year}</footer> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
