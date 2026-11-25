import "./Reservepage.css";
import { useState, useReducer } from "react";
import ReserveComponent from "./ReserveComponent";

import {
  getReservationApi,
  initializeTimes,
  updateTimes,
} from "./reservationApi";
import { useNavigate } from "react-router-dom";

export default function ReservePage() {
  const navigate = useNavigate();

  //const [BookedTimes, setBookedTimes] = useState([]);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes,
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      ...(name === "date" ? { time: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionMessage("");

    const submitted = getReservationApi("submitAPI")({
      ...formData,
    });

    if (!submitted) {
      setSubmissionMessage(
        "We couldn't submit your reservation. Please check your details and try again.",
      );
      return;
    }

    navigate("/booking-confirmed", {
      state: {
        booking: { ...formData },
      },
    });
    //setBookedTimes((prevBookedTimes) => [...prevBookedTimes, formData.time]);
  };

 /* setAvailableTimes((prevAvailableTimes) =>
    prevAvailableTimes.filter((time) => time.value !== formData.time),
  );*/

  return (
    <main className="reserve-page">
      <section className="reserve-layout" aria-labelledby="reserve-title">
        <div className="reserve-intro">
          <p className="reserve-eyebrow">A table is waiting</p>

          <h1 id="reserve-title">Make a reservation</h1>

          <p>
            Join us for a fresh Mediterranean meal. Choose a date and time, and
            tell us a little about your visit.
          </p>
        </div>

        <ReserveComponent
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          availableTimes={availableTimes}
          dispatch={dispatch}
          submissionMessage={submissionMessage}
        />
      </section>
    </main>
  );
}
