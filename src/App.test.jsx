import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import ReserveComponent from "./pages/ReserveComponent";

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
