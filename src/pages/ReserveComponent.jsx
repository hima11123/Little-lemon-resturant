export default function ReserveComponent({
  formData,
  onChange,
  onSubmit,
  availableTimes,
  dispatch,
  submissionMessage,
  isFormValid,
  errors = {},
  touched = {},
}) {
  const today = new Date();

  const minDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

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
              minLength={2}
              maxLength={40}
              autoComplete="name"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={onChange}
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby={
                touched.name && errors.name ? "name-error" : undefined
              }
            />
            {touched.name && errors.name && (
              <small id="name-error" className="field-error" role="alert">
                {errors.name}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              placeholder="Your phone number"
              required
              minLength={7}
              maxLength={20}
              pattern="[0-9+() -]{7,20}"
              title="Enter a valid phone number"
              value={formData.phone}
              onChange={onChange}
              aria-invalid={Boolean(touched.phone && errors.phone)}
              aria-describedby={
                touched.phone && errors.phone ? "phone-error" : undefined
              }
            />
            {touched.phone && errors.phone && (
              <small id="phone-error" className="field-error" role="alert">
                {errors.phone}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              min={minDate}
              required
              value={formData.date}
              aria-invalid={Boolean(touched.date && errors.date)}
              aria-describedby={
                touched.date && errors.date ? "date-error" : undefined
              }
              onChange={(e) => {
                onChange(e);

                dispatch({
                  type: "UPDATE_TIMES",
                  date: e.target.value,
                });
              }}
            />
            {touched.date && errors.date && (
              <small id="date-error" className="field-error" role="alert">
                {errors.date}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={onChange}
              aria-invalid={Boolean(touched.time && errors.time)}
              aria-describedby={
                touched.time && errors.time ? "time-error" : undefined
              }
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
            {touched.time && errors.time && (
              <small id="time-error" className="field-error" role="alert">
                {errors.time}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              step={1}
              required
              value={formData.guests}
              onChange={onChange}
              aria-invalid={Boolean(touched.guests && errors.guests)}
              aria-describedby={
                touched.guests && errors.guests ? "guests-error" : undefined
              }
            />
            {touched.guests && errors.guests && (
              <small id="guests-error" className="field-error" role="alert">
                {errors.guests}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              placeholder="Birthday, anniversary, or just because"
              value={formData.occasion}
              maxLength={100}
              onChange={onChange}
              aria-label="On Click"
              aria-invalid={Boolean(touched.occasion && errors.occasion)}
              aria-describedby={
                touched.occasion && errors.occasion
                  ? "occasion-error"
                  : undefined
              }
            />
            {touched.occasion && errors.occasion && (
              <small id="occasion-error" className="field-error" role="alert">
                {errors.occasion}
              </small>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="reserve-button"
          disabled={!isFormValid}
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
