import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders successfully", () => {
    render(<Footer />);
    expect(screen.getByTestId("Footer")).toBeInTheDocument();
  });

  it("renders the count and total props", () => {
    render(<Footer count={5} total={10} />);
    expect(screen.getByText("count 5")).toBeInTheDocument();
    expect(screen.getByText("total 10")).toBeInTheDocument();
  });

  it("displays the current time", () => {
    const currentTime = new Date().toLocaleTimeString();
    render(<Footer />);
    expect(screen.getByText(currentTime)).toBeInTheDocument();
  });
});
