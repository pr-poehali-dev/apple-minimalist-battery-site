
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray-500">
              Качественные автомобильные аккумуляторы с гарантией и доставкой по всей России.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Покупателям</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog" className="text-sm text-gray-500 hover:text-primary">
                  Каталог товаров
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-sm text-gray-500 hover:text-primary">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-sm text-gray-500 hover:text-primary">
                  Гарантия
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/calculator" className="text-sm text-gray-500 hover:text-primary">
                  Калькулятор
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-sm text-gray-500 hover:text-primary">
                  Инструкции
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-500">
                Телефон: <a href="tel:+78001234567" className="hover:text-primary">8 (800) 123-45-67</a>
              </li>
              <li className="text-sm text-gray-500">
                Email: <a href="mailto:info@powercell.ru" className="hover:text-primary">info@powercell.ru</a>
              </li>
              <li className="text-sm text-gray-500">
                Адрес: г. Москва, ул. Аккумуляторная, 10
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} PowerCell. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
