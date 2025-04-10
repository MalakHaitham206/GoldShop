import Link from "next/link";

async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json();
  
  const categoriesWithImages = await Promise.all(
    categories.map(async (category: string) => {
      const productsRes = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=1`);
      const [product] = await productsRes.json();
      return {
        name: category,
        slug: category,
        image: product?.image || '/default-category.jpg'
      };
    })
  );
  
  return categoriesWithImages;
}

export default async function CategoryPage() {
  const categories = await getCategories();

  return (
    <div className="container py-5">
      <div className="golden-categories-header mb-5 text-center">
        <h1 className="text-primary display-5 fw-bold mb-3">Shop by Category</h1>
        <p className="text-light opacity-75 lead">Discover our premium collections</p>
      </div>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-2 g-4">
        {categories.map(category => (
          <div key={category.slug} className="col">
            <div className="golden-category-card h-100 rounded-4 overflow-hidden shadow-sm">
              <div className="golden-category-image-container position-relative">
                <img
                  src={category.image}
                  className="golden-category-image"
                  alt={category.name}
                />
                <div className="golden-category-overlay"></div>
              </div>
              
              <div className="golden-category-body p-4">
                <h3 className="text-white text-capitalize mb-3">
                  {category.name}
                </h3>
                <Link 
                  href={`/products?category=${category.slug}`}
                  className="golden-category-btn w-100"
                >
                  <i className="bi bi-arrow-right me-2"></i> Explore Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}