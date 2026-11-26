import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, test, expect } from "vitest";
import ReserveComponent from "./pages/ReserveComponent";

afterEach(cleanup);

test("Renders the ReserveComponant heading", () => {
  render(
    <ReserveComponent
      formData={{
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
        occasion: "",
      }}
      onChange={() => {}}
      onSubmit={() => {}}
      availableTimes={[]}
      dispatch={() => {}}
    />,
  );
  const headingElement = screen.getByText("Your reservation details");
  expect(headingElement).toBeInTheDocument();
});

test("Shows each validation error below its corresponding field", () => {
  const errors = {
    name: "Enter a valid name.",
    phone: "Enter a valid phone number.",
    date: "Choose a valid date.",
    time: "Choose an available time.",
    guests: "Enter a valid guest count.",
    occasion: "Enter an occasion.",
  };

  render(
    <ReserveComponent
      formData={{
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
        occasion: "",
      }}
      onChange={() => {}}
      onSubmit={() => {}}
      availableTimes={[]}
      dispatch={() => {}}
      errors={errors}
      touched={{
        name: true,
        phone: true,
        date: true,
        time: true,
        guests: true,
        occasion: true,
      }}
      isFormValid={false}
    />,
  );

  const fields = [
    ["name", "Name"],
    ["phone", "Phone number"],
    ["date", "Date"],
    ["time", "Time"],
    ["guests", "Number of guests"],
    ["occasion", "Occasion"],
  ];

  fields.forEach(([field, label]) => {
    expect(screen.getByText(errors[field])).toHaveAttribute("role", "alert");
    expect(screen.getByLabelText(label)).toHaveAttribute(
      "aria-describedby",
      `${field}-error`,
    );
    expect(screen.getByLabelText(label)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});
