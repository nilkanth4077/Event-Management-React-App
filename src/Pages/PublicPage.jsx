import React, { useEffect, useState } from "react";
import Api from "../API/Api";
import staticImg from "../assets/img/cta-bg.jpg";
import '../Pages/PublicPage.css'

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
      <div className="container-fluid main px-5">
        <h2 className="my-4">Upcoming Events</h2>
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-6 mb-4">
              <div className="card h-100">
                <img src={staticImg} className="card-img-top" alt="Event" />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  {/* Render other event details as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
