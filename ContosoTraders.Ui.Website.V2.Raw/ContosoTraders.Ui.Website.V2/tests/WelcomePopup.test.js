import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WelcomePopup from "../src/components/WelcomePopup";

describe("WelcomePopup", () => {
  test("renders the popup with welcome text", () => {
    render(<WelcomePopup />);
    expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
    expect(screen.getByText(/TO/i)).toBeInTheDocument();
    expect(screen.getByText(/The DevSecOps Day 2 Hackathon!/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });

  test("closes the popup when 'Get Started' button is clicked", () => {
    render(<WelcomePopup />);
    const button = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(button);
    expect(screen.queryByText(/WELCOME/i)).not.toBeInTheDocument();
  });

  test("does not render popup after closing", () => {
    render(<WelcomePopup />);
    fireEvent.click(screen.getByRole("button", { name: /Get Started/i }));
    expect(screen.queryByRole("button", { name: /Get Started/i })).not.toBeInTheDocument();
  });
});