
import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../../components/Banner/Banner";

describe("Banner", () => {
  it("renders the banner component", () => {
    render(<Banner />);

    expect(screen.getByText("SwapTools")).toBeInTheDocument();
    expect(
      screen.getByText(/Construa conexões, troque ferramentas:/)
    ).toBeInTheDocument();
    expect(screen.getByText("sustentável")).toBeInTheDocument();
  });
});
