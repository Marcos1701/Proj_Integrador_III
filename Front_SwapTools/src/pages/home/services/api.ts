
import axios from "axios";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  userType: string;
  requests: number;
  location: string;
  date: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(
      "https://api.example.com/products"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(
      `https://api.example.com/products/search?q=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};

export const createProduct = async (
  productData: Omit<Product, "id">
): Promise<Product> => {
  try {
    const response = await axios.post<Product>(
      "https://api.example.com/products",
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (
  id: number,
  productData: Partial<Product>
): Promise<Product> => {
  try {
    const response = await axios.put<Product>(
      `https://api.example.com/products/${id}`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`https://api.example.com/products/${id}`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
