import React, { useEffect, useState } from "react";
import Api from "../API/Api";
import manImg from "../assets/img/hero-right.png";
import "../Pages/PublicPage.css";

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
      <section class="hero-section set-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-text">
                <h2>
                  Change Your Mind
                  <br /> To Become Sucess
                </h2>
                <a href="/" class="primary-btn">
                  Buy Ticket
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <img src={manImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section class="home-about-section spad">
        <section class="breadcrumb-section">
          <div class="breadcrumb-text">
            <h2>Most Hyped Events</h2>
          </div>
        </section>
        {events.slice(0, 2).map((event) => (
          <div class="container my-5">
            <div class="row">
              <div class="col-lg-6">
                <div class="ha-pic">
                  <img src={event.thumbnail} alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="ha-text">
                  <h2>{event.title}</h2>
                  <p>{event.details}</p>
                  <ul>
                    <li>
                      <span class="icon_check"></span> Type: {event.type}
                    </li>
                    <li>
                      <span class="icon_check"></span> Locations:{" "}
                      {event.location}
                    </li>
                    <li>
                      <span class="icon_check"></span> Capacity:{" "}
                      {event.capacity}
                    </li>
                    <li>
                      <span class="icon_check"></span> Price: ₹{event.price}
                    </li>
                  </ul>
                  <a href="/" class="ha-btn">
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div class="view-more">
          <a href="/all-events" class="primary-btn top-btn">
            View More
          </a>
        </div>
      </section>
    </>
  );
};
