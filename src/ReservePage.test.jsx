import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import ReservePage from "./pages/ReservePage";
import {
  getReservationApi,
  initializeTimes,
  updateTimes,
} from "./pages/reservationApi";

vi.mock("./api", () => ({
  fetchAPI: vi.fn(),
  submitAPI: vi.fn(),
}));

function renderBookingFlow() {
  return render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Routes>
        <Route path="/booking" element={<ReservePage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("reservation API integration", () => {
  test("initializeTimes returns times from fetchAPI for today", () => {
    const times = ["17:00", "17:30"];
    fetchAPI.mockReturnValue(times);

    expect(initializeTimes()).toBe(times);
    expect(fetchAPI).toHaveBeenCalledOnce();
    expect(fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
  });

  test("updateTimes returns API times for the selected local date", () => {
    const times = ["18:00", "18:30"];
    fetchAPI.mockReturnValue(times);

    expect(updateTimes([], { date: "2026-11-25" })).toBe(times);

    const requestedDate = fetchAPI.mock.calls[0][0];
    expect(requestedDate.getFullYear()).toBe(2026);
    expect(requestedDate.getMonth()).toBe(10);
    expect(requestedDate.getDate()).toBe(25);
  });

  test("rejects unknown API function names", () => {
    expect(() => getReservationApi("unknownAPI")).toThrow(
      "Unknown reservation API: unknownAPI",
    );
  });

  test("submits reservation data and opens its confirmation page", () => {
    fetchAPI.mockReturnValue(["17:00", "18:00"]);
    submitAPI.mockReturnValue(true);
    renderBookingFlow();

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Taylor Guest" },
    });
    fireEvent.change(screen.getByLabelText("Phone number"), {
      target: { value: "555-0100" },
    });
    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2026-11-25" },
    });
    fireEvent.change(screen.getByLabelText("Time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Reserve a table" }));

    expect(submitAPI).toHaveBeenCalledWith({
      name: "Taylor Guest",
      phone: "555-0100",
      date: "2026-11-25",
      time: "18:00",
      guests: 1,
      occasion: "Birthday",
    });
    expect(
      screen.getByRole("heading", { name: "Your reservation is confirmed!" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Thank you, Taylor Guest/)).toBeInTheDocument();
    expect(screen.getByText("18:00")).toBeInTheDocument();
  });

  test("keeps the form data when submitAPI rejects the reservation", () => {
    fetchAPI.mockReturnValue(["17:00", "18:00"]);
    submitAPI.mockReturnValue(false);
    renderBookingFlow();

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Taylor Guest" },
    });
    fireEvent.change(screen.getByLabelText("Phone number"), {
      target: { value: "555-0100" },
    });
    fireEvent.change(screen.getByLabelText("Date"), {
      target: { value: "2026-11-25" },
    });
    fireEvent.change(screen.getByLabelText("Time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Reserve a table" }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "We couldn't submit your reservation.",
    );
    expect(screen.getByLabelText("Name")).toHaveValue("Taylor Guest");
  });
});
