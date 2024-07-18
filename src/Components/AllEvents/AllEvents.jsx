import React, { useEffect, useState } from "react";
import Api from "../../API/Api";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await Api.getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      <section className="breadcrumb-section">
        <div className="breadcrumb-text">
          <h2>All Events</h2>
        </div>
      </section>
      <section className="home-about-section spad">
        {events.map((event) => (
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="ha-pic">
                  <img src={event.thumbnail} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ha-text">
                  <h2>{event.title}</h2>
                  <h5><i>Organized By:</i> {event.host.firstName.toUpperCase()}{" "}{event.host.lastName.toUpperCase()}</h5>
                  <p>{event.details}</p>
                  <ul>
                    <li>
                      <span className="icon_check">
                        <ArrowRightIcon />
                      </span>
                      <span className="text-dark">Type:</span> {event.type}
                    </li>
                    <li>
                      <span className="icon_check">
                        <ArrowRightIcon />
                      </span>
                      <span className="text-dark">Locations:</span>{" "}
                      {event.location}
                    </li>
                    <li>
                      <span className="icon_check">
                        <ArrowRightIcon />
                      </span>
                      <span className="text-dark">Capacity:</span>{" "}
                      {event.capacity}
                    </li>
                    <li>
                      <span className="icon_check">
                        <ArrowRightIcon />
                      </span>
                      <span className="text-dark">Price:</span> ₹{event.price}
                    </li>
                  </ul>
                  <a href="/" className="ha-btn">
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AllEvents;
