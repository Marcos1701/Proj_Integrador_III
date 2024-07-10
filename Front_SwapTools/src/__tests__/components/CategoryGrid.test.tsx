
import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";

describe("CategoryGrid", () => {
  it("renders all category items", () => {
    render(<CategoryGrid />);

    expect(screen.getByText("Ferramentas Manuais")).toBeInTheDocument();
    expect(screen.getByText("Ferramentas Elétricas")).toBeInTheDocument();
    expect(screen.getByText("EPIs")).toBeInTheDocument();
    expect(screen.getByText("Instrumentos de Medição")).toBeInTheDocument();
    expect(
      screen.getByText("Equipamentos de Soldagem e Corte")
    ).toBeInTheDocument();
    expect(screen.getByText("Ferramentas de Fixação")).toBeInTheDocument();
    expect(
      screen.getByText("Equipamentos de Elevação e Movimentação")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Equipamentos de Limpeza e Preparação de Superfícies")
    ).toBeInTheDocument();
    expect(screen.getByText("Ferramentas de Demolição")).toBeInTheDocument();
    expect(screen.getByText("Geral")).toBeInTheDocument();
  });
});
