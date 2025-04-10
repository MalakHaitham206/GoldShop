'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BiHome, 
  BiShoppingBag, 
  BiCategory, 
  BiGridAlt,
  BiCoin,
  BiMoney,
  BiDiamond
} from 'react-icons/bi';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <div className="d-flex flex-column h-100">
        {/* Brand/Logo */}
        <div className="text-center mb-4 pt-3">
          <Link href="/" className="navbar-brand text-primary fw-bold fs-4">
            GoldShop
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow-1">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link 
                className={`nav-link ${pathname === '/' ? 'active-link' : ''}`}
                href="/"
              >
                <i className="bi bi-house"></i>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${pathname.includes('/products') ? 'active-link' : ''}`}
                href="/products"
              >
                <i className="bi bi-bag"></i>
                <span className="nav-text">Products</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${pathname.includes('/category') ? 'active-link' : ''}`}
                href="/category"
              >
                <i className="bi bi-tags"></i>
                <span className="nav-text">Categories</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer/Copyright */}
        <div className="mt-auto text-center text-muted small py-3">
          © {new Date().getFullYear()} GoldShop
        </div>
      </div>
    </div>
  );
}