export default function ReserveComponent({
  formData,
  onChange,
  onSubmit,
  availableTimes,
  dispatch,
  submissionMessage,
}) {
  const isFormComplete =
    formData.name &&
    formData.phone &&
    formData.date &&
    formData.time &&
    formData.guests &&
    formData.occasion;

  return (
    <form onSubmit={onSubmit} className="reserve-form">
      <fieldset className="form-fieldset">
        <legend className="form-legend">Your reservation details</legend>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              placeholder="(555) 123-4567"
              required
              value={formData.phone}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={(e) => {
                onChange(e);

                dispatch({
                  type: "UPDATE_TIMES",
                  date: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={onChange}
            >
              <option value="" disabled>
                Select a time
              </option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              required
              value={formData.guests}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              placeholder="Birthday, anniversary, or just because"
              required
              value={formData.occasion}
              onChange={onChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="reserve-button"
          disabled={!isFormComplete}
        >
          Reserve a table
        </button>
      </fieldset>
      <p className="reserve-status" role="status" aria-live="polite">
        {submissionMessage}
      </p>
    </form>
  );
}
