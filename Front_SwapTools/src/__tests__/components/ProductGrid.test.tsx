
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { fetchProducts } from "../../services/api";

jest.mock("../../services/api");

const mockProducts = [
  {
    id: 1,
    image: "http://example.com/image1.jpg",
    title: "Product 1",
    description: "Description 1",
    userType: "Usuario Bronze",
    requests: 2,
    location: "Location 1",
    date: "2024-03-11",
  },
  {
    id: 2,
    image: "http://example.com/image2.jpg",
    title: "Product 2",
    description: "Description 2",
    userType: "Usuario Prata",
    requests: 5,
    location: "Location 2",
    date: "2024-03-12",
  },
];

describe("ProductGrid", () => {
  beforeEach(() => {
    (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);
  });

  it("renders the product grid with fetched products", async () => {
    render(<ProductGrid title="Test Products" />);

    expect(screen.getByText("Test Products")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });
});
