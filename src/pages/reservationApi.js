import { fetchAPI, submitAPI } from "../api";

export function getReservationApi(functionName) {
  const apiFunctions = {
    fetchAPI,
    submitAPI,
  };

  const apiFunction = apiFunctions[functionName];

  if (typeof apiFunction !== "function") {
    throw new Error(`Unknown reservation API: ${functionName}`);
  }

  return apiFunction;
}

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(_state, action) {
  const [year, month, day] = action.date.split("-").map(Number);
  const selectedDate = new Date(year, month - 1, day);

  return fetchAPI(selectedDate);
}