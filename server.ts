import { createServer } from "http";
import { parse } from "url";
import fetch from "node-fetch";
import { IncomingMessage, ServerResponse } from "http";

const PORT = process.env.PORT || 3000;

createServer(async (req: IncomingMessage, res: ServerResponse) => {
  const { pathname, query } = parse(req.url || "", true);

  if (pathname === "/api/products") {
    try {
      const apiResponse = await fetch("https://api.timbu.cloud/products", {
        headers: {
          "Content-Type": "application/json",
          // Add any necessary headers for authentication or other purposes
        },
      });

      if (!apiResponse.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await apiResponse.json();
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching products:", error);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "Error fetching products" }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not Found" }));
  }
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
