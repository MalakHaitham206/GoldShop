import PriceFilter from "@/components/PriceFilter";
import Link from "next/link";

interface ProductListProps {
  searchParams: {
    filter?: string;
    category?: string;
  };
}

async function getProducts(filter?: string, category?: string) {
  let url = 'https://fakestoreapi.com/products';
  
  if (category) {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  const res = await fetch(url);
  let products = await res.json();

  if (filter === 'small') {
    products = products.filter((p: any) => p.price < 50);
  } else if (filter === 'medium') {
    products = products.filter((p: any) => p.price >= 50 && p.price <= 100);
  } else if (filter === 'high') {
    products = products.filter((p: any) => p.price > 100);
  }

  return products;
}

export default async function ProductList({ searchParams }: ProductListProps) {
  const products = await getProducts(searchParams.filter, searchParams.category);

  return (
    <div className="container py-4">
      <div className="mb-5">
        {searchParams.category && (
          <div className="golden-category-header mb-4 p-3 rounded-3">
            <h2 className="text-primary mb-0 text-capitalize">
              {(searchParams.category ?? '').replace(/-/g, ' ')}
            </h2>
          </div>
        )}
        <PriceFilter />
      </div>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
        {products.map((product: any) => (
          <div key={product.id} className="col">
            <div className="golden-product-card h-100 rounded-4 overflow-hidden shadow-sm">
              <div className="golden-image-wrapper position-relative">
                <img 
                  src={product.image}
                  className="golden-product-image p-3"
                  alt={product.title}
                />
                {product.rating.rate >= 4.5 && (
                  <div className="golden-badge position-absolute top-0 end-0 m-2">
                    <span className="badge bg-primary text-dark">
                      <i className="bi bi-star-fill me-1"></i> Premium
                    </span>
                  </div>
                )}
              </div>
              
              <div className="golden-card-body p-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="text-white mb-0 golden-product-title">{product.title}</h5>
                  <span className="golden-category-badge">
                    {product.category}
                  </span>
                </div>
                
                <div className="golden-rating-price mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-2">
                      {'★'.repeat(Math.round(product.rating.rate))}
                      {'☆'.repeat(5 - Math.round(product.rating.rate))}
                    </span>
                    <span className="text-light opacity-75 small">({product.rating.count})</span>
                  </div>
                  <h4 className="text-primary mb-0">${product.price}</h4>
                </div>
                
                <Link 
                  href={`/product/${product.id}`} 
                  className="golden-view-btn w-100 mt-auto d-flex justify-content-center align-items-center text-center  rounded-5 text-decoration-none "
                >
                  <i className="bi bi-eye me-2 "></i> View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="golden-empty-state text-center py-5 rounded-4">
          <i className="bi bi-search text-primary display-4 mb-3"></i>
          <h3 className="text-white mb-2">No products found</h3>
          <p className="text-light opacity-75 mb-4">Try adjusting your filters or search criteria</p>
          <Link href="/products" className="btn btn-primary px-4">
            <i className="bi bi-arrow-counterclockwise me-2"></i> Reset Filters
          </Link>
        </div>
      )}
    </div>
  );
}