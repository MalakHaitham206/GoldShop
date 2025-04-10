export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products.map((product: any) => ({ id: product.id.toString() }));
}
export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-vh-100">
      <div className="py-4">
        {children}
      </div>
    </div>
  );
}