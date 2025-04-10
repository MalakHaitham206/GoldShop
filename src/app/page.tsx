import Link from 'next/link';

export default function Home() {
  return (
    <div className="golden-homepage min-vh-100">
      {/* Hero Section */}
      <div className="golden-hero-section position-relative overflow-hidden">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-3 fw-bold text-primary mb-3">
                Welcome to <span className="text-white">GoldShop</span>
              </h1>
              <p className="lead text-light mb-4 opacity-75">
                Experience luxury redefined with our exclusive golden collection
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Link 
                  href="/products" 
                  className="golden-cta-btn btn-primary"
                >
                  <i className="bi bi-bag me-2"></i> Browse Products
                </Link>
                <Link 
                  href="/category" 
                  className="golden-cta-btn btn-outline"
                >
                  <i className="bi bi-tags me-2"></i> Explore Categories
                </Link>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="golden-hero-image position-relative">
                <div className="golden-hero-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories Preview */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-primary mb-3">Our Collections</h2>
          <p className="text-light opacity-75">Discover our premium categories</p>
        </div>
        <div className="row g-4 justify-content-center">
          {['electronics', 'jewelery', 'men\'s clothing'].map((category) => (
            <div key={category} className="col-md-4">
              <Link 
                href={`/products?category=${category}`}
                className="golden-category-preview text-decoration-none"
              >
                <div className="golden-category-card p-4 rounded-3 text-center">
                  <div className="golden-category-icon mb-3">
                    <i className={`bi ${
                      category === 'electronics' ? 'bi-laptop' : 
                      category === 'jewelery' ? 'bi-gem' : 'bi-person'
                    } text-primary`}></i>
                  </div>
                  <h3 className="text-white text-capitalize">
                    {category.replace(/'/g, '')}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}