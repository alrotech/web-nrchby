
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'Товарищество' },
    { path: '/finances', label: 'Финансы' },
    { path: '/documents', label: 'Документы' },
    { path: '/residents', label: 'Жильцам' },
    { path: '/renovation', label: 'Ремонт' },
    { path: '/communication', label: 'Общение' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo-color.svg" alt="Логотип" className="h-8 w-auto mr-2" />
              <h1 className="text-2xl font-bold text-primary">Нарочанская 4</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/10 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
