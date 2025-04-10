import React, { Suspense } from "react";
import ProductList from "./ProductList";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", { 
    cache: 'no-store' 
  });
  return await res.json();
}

export default async function ProductsPage({
  searchParams
}: {
  searchParams: { price?: string; category?: string }
}) {
  const products = await getProducts();

  return (
    <div className="container py-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}