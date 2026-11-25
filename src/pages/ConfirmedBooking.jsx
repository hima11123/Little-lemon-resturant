import { Link, useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";

function formatBookingDate(date) {
  if (!date) return "";

  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    new Date(year, month - 1, day),
  );
}

export default function ConfirmedBooking() {
  const { state } = useLocation();
  const booking = state?.booking;

  return (
    <main className="confirmed-booking">
      <section
        className="confirmation-card"
        aria-labelledby="confirmation-title"
      >
        <div className="confirmation-icon" aria-hidden="true">
          ✓
        </div>
        <p className="confirmation-eyebrow">Little Lemon</p>
        <h1 id="confirmation-title">Your reservation is confirmed!</h1>
        <p className="confirmation-message">
          {booking?.name
            ? `Thank you, ${booking.name}. We look forward to welcoming you.`
            : "Thank you for choosing Little Lemon. We look forward to welcoming you."}
        </p>

        {booking && (
          <dl className="confirmation-details">
            {booking.date && (
              <div>
                <dt>Date</dt>
                <dd>{formatBookingDate(booking.date)}</dd>
              </div>
            )}
            {booking.time && (
              <div>
                <dt>Time</dt>
                <dd>{booking.time}</dd>
              </div>
            )}
            {booking.guests && (
              <div>
                <dt>Guests</dt>
                <dd>
                  {booking.guests}{" "}
                  {Number(booking.guests) === 1 ? "person" : "people"}
                </dd>
              </div>
            )}
            {booking.occasion && (
              <div>
                <dt>Occasion</dt>
                <dd>{booking.occasion}</dd>
              </div>
            )}
          </dl>
        )}

        <Link className="confirmation-home-link" to="/">
          Return to home
        </Link>
      </section>
    </main>
  );
}
