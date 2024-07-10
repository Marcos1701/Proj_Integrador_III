
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";

describe("Header", () => {
  it("renders the header component", () => {
    render(<Header />);

    expect(screen.getByAltText("Company logo")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Buscar por 'Furadeira'")
    ).toBeInTheDocument();
    expect(screen.getByText("Trocas em andamento")).toBeInTheDocument();
    expect(screen.getByText("Meus Anúncios")).toBeInTheDocument();
    expect(screen.getByText("Notificações")).toBeInTheDocument();
    expect(screen.getByText("Favoritos")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Crie sua conta")).toBeInTheDocument();
  });
});
