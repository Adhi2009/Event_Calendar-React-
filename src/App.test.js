import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";

test("renders the event platform heading", async () => {
  render(
    <MemoryRouter>
      <AuthProvider><App /></AuthProvider>
    </MemoryRouter>
  );
  expect(screen.getByText(/Find your next/i)).toBeInTheDocument();
  expect(await screen.findByText("Jaffna Music Night", {}, { timeout: 2000 })).toBeInTheDocument();
});

test("shows calendar navigation", async () => {
  render(
    <MemoryRouter initialEntries={["/calendar"]}>
      <AuthProvider><App /></AuthProvider>
    </MemoryRouter>
  );
  expect(await screen.findByText("Event Calendar", {}, { timeout: 2000 })).toBeInTheDocument();
  expect(screen.getByText("August 2026")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /8\/5\/2026, 1 events/i })).toBeInTheDocument();
});
