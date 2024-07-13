"use client";

// pages/index.tsx
import { useState, useEffect } from "react";
import { fetchProducts } from "@/lib/fetchProducts";
import { ProductsResponse, Product } from "@/types/products";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: ProductsResponse = await fetchProducts(
          currentPage,
          itemsPerPage
        );
        setProducts(data.items);
        setTotal(data.total);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(total / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {product.photos.length > 0 && (
              <img src={product.photos[0].url} alt={product.name} />
            )}
            <p>Price: {product.current_price[0]?.NGN[0]}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
