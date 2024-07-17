import React, { useEffect, useState } from "react";
import Api from "../../API/Api";

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
      <section class="breadcrumb-section">
        <div class="breadcrumb-text">
          <h2>All Events</h2>
        </div>
      </section>
      <section class="home-about-section spad">
        {events.map((event) => (
          <div class="container">
            <div class="row mb-5">
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
      </section>
    </>
  );
};

export default AllEvents;
