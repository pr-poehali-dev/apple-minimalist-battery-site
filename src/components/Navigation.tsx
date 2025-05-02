
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navStructure = [
  { name: "Главная", href: "/" },
  { 
    name: "Каталог", 
    href: "/catalog",
    children: [
      { name: "Для легковых автомобилей", href: "/catalog/car" },
      { name: "Для грузовых автомобилей", href: "/catalog/truck" },
      { name: "Для мотоциклов", href: "/catalog/moto" },
      { name: "Премиум класса", href: "/catalog/premium" },
    ] 
  },
  { name: "Калькулятор", href: "/calculator" },
  { 
    name: "Информация", 
    href: "#",
    children: [
      { name: "Доставка и оплата", href: "/delivery" },
      { name: "Гарантия", href: "/warranty" },
      { name: "Инструкции", href: "/instructions" },
      { name: "О компании", href: "/about" },
    ] 
  },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navStructure.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors focus:outline-none"
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200", 
                      openDropdown === item.name ? "transform rotate-180" : ""
                    )} />
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md py-2 z-50 transform transition-all duration-200",
                    openDropdown === item.name 
                      ? "opacity-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Контакты
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white z-40 md:hidden overflow-y-auto transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 space-y-1">
          {navStructure.map((item) => (
            <div key={item.name} className="border-b border-gray-200 py-2">
              {item.children ? (
                <>
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full py-2 text-gray-700"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200", 
                      openDropdown === item.name ? "transform rotate-180" : ""
                    )} />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-200",
                    openDropdown === item.name 
                      ? "max-h-96 opacity-100 py-2" 
                      : "max-h-0 opacity-0"
                  )}>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block pl-4 py-2 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button className="w-full" variant="outline">
              Контакты
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
