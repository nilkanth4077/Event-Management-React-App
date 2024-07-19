import React, { useEffect, useState } from "react";
import Api from "../API/Api";
import manImg from "../assets/img/hero-right.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const PublicPage = () => {
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
      <section className="hero-section set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-text">
                <h2>
                  Upcoming Events:
                  <br /> Mark Your Calendar!
                </h2>
                <a href="/" className="primary-btn">
                  Buy Ticket
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={manImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-about-section spad">
        <section className="breadcrumb-section">
          <div className="breadcrumb-text">
            <h2>Must-See Events: Join the Excitement!</h2>
          </div>
        </section>
        {events.slice(0, 2).map((event) => (
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="ha-pic">
                  <img src={event.thumbnail} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ha-text">
                  <h2>{event.title}</h2>
                  <h4>Organized By: {event.host.firstName.toUpperCase()}</h4>
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
        <div className="view-more">
          <a href="/all-events" className="primary-btn top-btn">
            View More <ChevronRightIcon />
          </a>
        </div>
      </section>
    </>
  );
};
