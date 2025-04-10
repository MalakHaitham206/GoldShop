// app/product/[id]/page.tsx
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products.map((product: any) => ({ id: product.id.toString() }));
}

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  // Since fakestoreapi only provides a single image, we'll create an array with it
  const productImages = [product.image];

  return (
    <div className="container py-5">
      <div className="golden-product-card rounded-4 overflow-hidden shadow-lg">
        <div className="row g-0">
          {/* Product Gallery */}
          <div className="col-lg-6">
            <div className="p-4 h-100 d-flex flex-column">
              <div className="golden-image-container bg-black rounded-3 p-3 mb-3 flex-grow-1 d-flex align-items-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="img-fluid golden-main-image"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              </div>
              <div className="golden-thumbnails d-flex gap-2">
                {productImages.map((image: string, index: number) => (
                  <div key={index} className="golden-thumbnail-container bg-black rounded-2 p-1">
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="img-fluid rounded-1"
                      style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-lg-6 golden-details-section">
            <div className="p-4 h-100 d-flex flex-column">
              {/* Product Header */}
              <div className="mb-4">
                <h1 className="text-primary mb-2 fw-bold">{product.title}</h1>
                <div className="d-flex align-items-center mb-3">
                  <div className="golden-rating me-3">
                    {'★'.repeat(Math.round(product.rating?.rate || 0))}
                    {'☆'.repeat(5 - Math.round(product.rating?.rate || 0))}
                  </div>
                  <span className="text-light opacity-75">({product.rating?.count || 0} ratings)</span>
                </div>
                <p className="text-light mb-4">{product.description}</p>
              </div>

              {/* Price Section */}
              <div className="golden-price-section mb-4 p-3 rounded-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="text-primary mb-0">${product.price}</h2>
                  </div>
                  <span className="golden-brand-badge">
                    {product.category} {/* fakestoreapi doesn't have brand */}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="golden-actions mb-4">
                <div className="d-grid gap-3">
                  <button className="btn btn-primary btn-lg py-3 fw-bold">
                    <i className="bi bi-cart-plus me-2"></i> Add to Cart
                  </button>
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-heart me-2"></i> Add to Wishlist
                  </button>
                </div>
              </div>

              {/* Product Meta */}
              <div className="golden-meta mt-auto pt-3">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <p className="text-light mb-1">
                      <strong className="text-primary">Category:</strong> 
                      <span className="ms-2 text-capitalize">{product.category}</span>
                    </p>
                  </div>
                  <div className="col-md-6 mb-2">
                    <p className="text-light mb-1">
                      <strong className="text-primary">Availability:</strong> 
                      <span className="ms-2 text-success">In stock</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}