// lib/fetchProducts.ts
import { SingleProduct, ProductsResponse } from "@/types/products";

export async function fetchProducts(
  page: number,
  size: number
): Promise<ProductsResponse> {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `https://api.timbu.cloud/products?organization_id=552ac4584e144bdead2d01aecd405c1c&reverse_sort=false&page=${page}&size=${size}&Appid=5IRYTK3AGLM1N8I&Apikey=e89a430e3c1d4eacb68ea4df73c8f2f320240712152133861359`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await response.json();
  return data;
}

export async function fetchProductById(id: string): Promise<SingleProduct> {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `https://api.timbu.cloud/products/${id}?organization_id=552ac4584e144bdead2d01aecd405c1c&Appid=5IRYTK3AGLM1N8I&Apikey=e89a430e3c1d4eacb68ea4df73c8f2f320240712152133861359`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: SingleProduct = await response.json();
  return data;
}
