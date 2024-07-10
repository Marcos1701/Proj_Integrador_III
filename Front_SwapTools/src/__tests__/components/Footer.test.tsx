
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer/Footer";

describe("Footer", () => {
  it("renders the footer component with all columns", () => {
    render(<Footer />);

    expect(screen.getByText("Celulares e Telefonia")).toBeInTheDocument();
    expect(screen.getByText("Móveis")).toBeInTheDocument();
    expect(screen.getByText("Apartamentos")).toBeInTheDocument();
    expect(screen.getByText("Artigos infantis")).toBeInTheDocument();
    expect(
      screen.getByText("Bijouterias, relógios e acessórios")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/© Brazino, o Jogo da Galera Ltda./)
    ).toBeInTheDocument();
  });
});
