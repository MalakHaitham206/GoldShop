import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GoldShop - Premium E-commerce',
  description: 'Luxury products with golden touch',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <div className="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}