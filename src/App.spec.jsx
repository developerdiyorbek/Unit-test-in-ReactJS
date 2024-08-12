import { describe, it, expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should render correctly", async () => {
    render(<App />);

    expect(screen.getByRole("heading")).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(await screen.findByRole("button", { name: /clicked/i }));
  });
});
