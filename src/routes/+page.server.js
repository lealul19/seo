import { db } from "$lib/server/db";

export async function load() {
  const [products] = await db.query(
    "SELECT name, description, price, image_url FROM products"
  );

  return { products };
}