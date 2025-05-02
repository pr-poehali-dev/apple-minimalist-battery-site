
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PopularProducts from "@/components/PopularProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PopularProducts />
      
      {/* Раздел о компании */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">О компании PowerCell</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Более 10 лет мы поставляем автомобильные аккумуляторы высочайшего качества
                как для частных лиц, так и для корпоративных клиентов.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Мы работаем напрямую с производителями, что позволяет нам предлагать
                лучшие цены и гарантировать оригинальность продукции.
              </p>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline">Подробнее о нас</Button>
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1562157735-94636fdf9635?q=80&w=800&auto=format&fit=crop" 
                alt="Наша команда" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Контактная секция */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Остались вопросы?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы
          </p>
          <div className="mt-8">
            <Button size="lg">Связаться с нами</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
