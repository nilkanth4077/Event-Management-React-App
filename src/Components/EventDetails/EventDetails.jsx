import React, { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useParams } from "react-router-dom";
import Api from "../../API/Api";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [guests, setGuests] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await Api.getEventById(eventId);
        setEvent(eventData);
        // console.log("Event: ", eventData);

        // Fetch guests for the event
        const guestData = await Api.getAllGuestsByEventId(eventId);
        setGuests(guestData);

        // Fetch schedule for the event
        const scheduleData = await Api.getScheduleByEventId(eventId);
        setSchedule(scheduleData);
      } catch (error) {
        console.error("Error fetching event or schedule:", error);
      }
    };
    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Something About Us</h2>
                <p className="f-para">
                  There are several ways people can make money online. From
                  selling products to advertising. In this article I am going to
                  explain the concept of contextual advertising.
                </p>
                <p>
                  First I will explain what contextual advertising is.
                  Contextual advertising means the advertising of products on a
                  website according to the content the page is displaying. For
                  example if the content of a website was information on a Ford
                  truck then the advertisements would be for Ford trucks for
                  sale, or Ford servicing etc. It picks up the words on the page
                  and displays ads that are similar to those words. Then when
                  someone either performs an action or clicks on your page you
                  will get paid.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-6">
                  <div className="ha-ed-pic">
                    <img src={event.thumbnail} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ha-text">
                    <h2>{event.title}</h2>
                    <h5>
                      <i>Organized By:</i> {event.host.firstName}{" "}
                      {event.host.lastName}
                    </h5>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-member-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Who’s speaking</h2>
                <p>
                  These are our communicators, you can see each person
                  information
                </p>
              </div>
            </div>
          </div>
        </div>

        {guests.map((guest) => (
          <div
            className="member-item set-bg"
            style={{ backgroundImage: `url(${guest.profile_url})` }}
            key={guest.id}
          >
            <div className="mi-social">
              <div className="mi-social-inner bg-gradient">
                <a href="/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="mi-text">
              <h5>{guest.name}</h5>
              <span>{guest.role}</span>
            </div>
          </div>
        ))}
      </section>

      <div>
        <section className="breadcrumb-section mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Our Schedule</h2>
                  <p>
                    Here are the detailed schedule of the event, you can plan
                    your day accordingly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="schedule-table-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="schedule-table-tab">
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="schedule-table-content">
                        <table>
                          <thead>
                            <tr className="bg">
                              <th>
                                <strong>Date</strong>
                              </th>
                              <th>
                                <strong>Duration</strong>
                              </th>
                              <th>
                                <strong>Event</strong>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {schedule.map((item) => (
                              <tr key={item.id}>
                                <td className="break hover-bg">
                                  <h5>
                                    {item.date.toString().substring(0, 10)}
                                  </h5>
                                  <p>( {item.day} )</p>
                                </td>
                                <td className="break hover-bg">
                                  <h5>
                                    {item.startTime
                                      .toString()
                                      .substring(11, 16)}{" "}
                                    -{" "}
                                    {item.endTime.toString().substring(11, 16)}
                                  </h5>
                                </td>
                                <td className="break hover-bg">
                                  <h5>{item.subEvent}</h5>
                                  <p>
                                    <span>By</span> {item.by}
                                  </p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="pricing-section set-bg spad"
        data-setbg="img/pricing-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Ticket Pricing</h2>
                <p>Get your event ticket plan</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="price-item">
                <h4>1 Day Pass</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>129
                  </h2>
                </div>
                <ul>
                  <li>One Day Conference Ticket</li>
                  <li>Coffee-break</li>
                  <li>Lunch and Networking</li>
                  <li>Keynote talk</li>
                  <li>Talk to the Editors Session</li>
                </ul>
                <a href="/" className="price-btn">
                  Get Ticket <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-item top-rated">
                <div className="tr-tag">
                  <i className="fa fa-star"></i>
                </div>
                <h4>Full Pass</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>199
                  </h2>
                </div>
                <ul>
                  <li>One Day Conference Ticket</li>
                  <li>Coffee-break</li>
                  <li>Lunch and Networking</li>
                  <li>Keynote talk</li>
                  <li>Talk to the Editors Session</li>
                  <li>Lunch and Networking</li>
                  <li>Keynote talk</li>
                </ul>
                <a href="/" className="price-btn">
                  Get Ticket <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-item">
                <h4>Group Pass</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>79
                  </h2>
                </div>
                <ul>
                  <li>One Day Conference Ticket</li>
                  <li>Coffee-break</li>
                  <li>Lunch and Networking</li>
                  <li>Keynote talk</li>
                  <li>Talk to the Editors Session</li>
                </ul>
                <a href="/" className="price-btn">
                  Get Ticket <span className="arrow_right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Our Story</h2>
                <p>Here are the detailed information about our achievements</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="story-left">
                <div className="story-item">
                  <h2>2008</h2>
                  <div className="si-text">
                    <h4>Adwords Keyword Research For Beginners</h4>
                    <p>
                      However this is also the most expensive position. Give it
                      a try if the second to fourth display position gives you
                      more visitors and more customers for less money.
                    </p>
                  </div>
                </div>
                <div className="story-item">
                  <h2>2011</h2>
                  <div className="si-text">
                    <h4>Adwords Keyword Research For Beginners</h4>
                    <p>
                      Virgin Mobile took a more effective approach in marketing
                      their cell phone service by focusing not on the people
                      that would be making the actual purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-right">
                <div className="story-item">
                  <h2>2015</h2>
                  <div className="si-text">
                    <h4>15 Tips To Increase Your Adwords Profits</h4>
                    <p>
                      There is no better advertisement campaign that is low cost
                      and also successful at the same time. Great business ideas
                      when utilized effectively can save lots of money.
                    </p>
                  </div>
                </div>
                <div className="story-item">
                  <h2>2019</h2>
                  <div className="si-text">
                    <h4>
                      Advertising Internet Online Opportunities To Explore
                    </h4>
                    <p>
                      Many people sign up for affiliate programs with the hopes
                      of making some serious money. They advertise a few places
                      and then wait for the money to start pouring in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
