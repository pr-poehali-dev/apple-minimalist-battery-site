import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold tracking-tight">PowerBatt</Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Каталог
            </Link>
            <Link to="/delivery" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Доставка и оплата
            </Link>
            <Link to="/warranty" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Гарантия
            </Link>
            <Link to="/calculator" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Калькулятор
            </Link>
            <Link to="/guide" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Инструкции
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link to="/catalog" className="block py-2 text-base font-medium text-gray-700 hover:text-black">
              Каталог
            </Link>
            <Link to="/delivery" className="block py-2 text-base font-medium text-gray-700 hover:text-black">
              Доставка и оплата
            </Link>
            <Link to="/warranty" className="block py-2 text-base font-medium text-gray-700 hover:text-black">
              Гарантия
            </Link>
            <Link to="/calculator" className="block py-2 text-base font-medium text-gray-700 hover:text-black">
              Калькулятор
            </Link>
            <Link to="/guide" className="block py-2 text-base font-medium text-gray-700 hover:text-black">
              Инструкции
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;