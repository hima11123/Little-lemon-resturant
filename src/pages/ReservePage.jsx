import "./Reservepage.css";
import { useState, useReducer } from "react";
import ReserveComponent from "./ReserveComponent";

import {
  getReservationApi,
  initializeTimes,
  updateTimes,
} from "./reservationApi";
import { useNavigate } from "react-router-dom";

function validateFormData(formData, availableTimes) {
  const errors = {};

  // Name validation
  if (formData.name.trim().length < 2  || formData.name.trim().length > 40) {
    errors.name = "Name must contain at least 2 characters.";
  }

  // Phone validation
  const phonePattern = /^[0-9+() -]{7,20}$/;

  if (!phonePattern.test(formData.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  // Date validation
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  if (!formData.date || formData.date < minDate) {
    errors.date = "Please select a valid date.";
  }

  // Time validation
  if (!availableTimes.includes(formData.time)) {
    errors.time = "Please select an available time.";
  }

  // Guests validation
  const guests = Number(formData.guests);

  if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
    errors.guests = "Guests must be a whole number between 1 and 10.";
  }

  return errors;
}

export default function ReservePage() {
  const navigate = useNavigate();
  const [touched, setTouched] = useState({});

  //const [BookedTimes, setBookedTimes] = useState([]);
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes,
  );
  const [errors, setErrors] = useState({});

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
    const updatedFormData = {
      ...formData,
      [name]: value,
      ...(name === "date" ? { time: "" } : {}),
    };

    setFormData(updatedFormData);
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
    setErrors(validateFormData(updatedFormData, availableTimes));
  };
  const handleValidation = () => {
    const ValidationErrors = validateFormData(formData, availableTimes);
    setErrors(ValidationErrors);
    return Object.keys(ValidationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionMessage("");
    const isValid = handleValidation();

    if (!isValid) {
      return;
    }

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
  const currentErrors = validateFormData(formData, availableTimes);

  const isFormValid = Object.keys(currentErrors).length === 0;

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
          isFormValid={isFormValid}
          errors={errors}
          touched={touched}
        />
      </section>
    </main>
  );
}
