"use server";

import { ProductsResponse, SingleProduct } from "@/types/products";
import axios from "axios";

export const getProducts = async (
  page: number = 1,
  size: number = 10
): Promise<ProductsResponse> => {
  try {
    const res = await axios.get(
      `https://api.timbu.cloud/products?organization_id=${process.env.NEXT_PUBLIC_ORGANIZATION_ID}&Appid=${process.env.NEXT_PUBLIC_APP_ID}&Apikey=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          credentials: "include",
        },
        withCredentials: true,
      }
    );

    return {
      items: res.data.items,
      total: res.data.total,
      page: page,
      size: size,
      debug: res.data.debug, // Adjust as necessary
      previous_page: res.data.previous_page, // Adjust as necessary
      next_page: res.data.next_page, // Adjust as necessary
      message: "Product retrieved successfully",
      status: res.status,
    };
  } catch (e: any) {
    return {
      items: [],
      total: 0,
      page: page,
      size: size,
      debug: e?.response?.data.debug, // Adjust as necessary
      previous_page: undefined,
      next_page: undefined,
      message: e?.response?.data.message,
      status: e?.response?.status,
    };
  }
};

export async function fetchProductById(id: string): Promise<SingleProduct> {
  try {
    const response = await axios.get<SingleProduct>(
      `https://api.timbu.cloud/products/${id}?organization_id=${process.env.NEXT_PUBLIC_ORGANIZATION_ID}&Appid=${process.env.NEXT_PUBLIC_APP_ID}&Apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          credentials: "include",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
}
