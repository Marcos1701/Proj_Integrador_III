
import axios from "axios";
import {
  fetchProducts,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/api";

jest.mock("axios");

describe("API Services", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("fetchProducts should return products on successful API call", async () => {
    const mockProducts = [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
    ];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockProducts });

    const result = await fetchProducts();
    expect(result).toEqual(mockProducts);
    expect(axios.get).toHaveBeenCalledWith("https://api.example.com/products");
  });

  it("searchProducts should return filtered products on successful API call", async () => {
    const mockProducts = [{ id: 1, title: "Searched Product" }];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockProducts });

    const result = await searchProducts("test");
    expect(result).toEqual(mockProducts);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.example.com/products/search?q=test"
    );
  });

  it("createProduct should return created product on successful API call", async () => {
    const newProduct = { title: "New Product", description: "Description" };
    const createdProduct = { id: 1, ...newProduct };
    (axios.post as jest.Mock).mockResolvedValue({ data: createdProduct });

    const result = await createProduct(newProduct);
    expect(result).toEqual(createdProduct);
    expect(axios.post).toHaveBeenCalledWith(
      "https://api.example.com/products",
      newProduct
    );
  });

  it("updateProduct should return updated product on successful API call", async () => {
    const updatedProduct = { id: 1, title: "Updated Product" };
    (axios.put as jest.Mock).mockResolvedValue({ data: updatedProduct });

    const result = await updateProduct(1, { title: "Updated Product" });
    expect(result).toEqual(updatedProduct);
    expect(axios.put).toHaveBeenCalledWith(
      "https://api.example.com/products/1",
      { title: "Updated Product" }
    );
  });

  it("deleteProduct should call API to delete product", async () => {
    (axios.delete as jest.Mock).mockResolvedValue({});

    await deleteProduct(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "https://api.example.com/products/1"
    );
  });
});
