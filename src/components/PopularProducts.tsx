
import BatteryCard from "@/components/BatteryCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Моковые данные для демонстрации
const popularProducts = [
  {
    id: "1",
    name: "VARTA Blue Dynamic 60Ah",
    price: 6500,
    capacity: 60,
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop",
    category: "Легковые",
  },
  {
    id: "2",
    name: "Bosch S4 Silver 74Ah",
    price: 8200,
    capacity: 74,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
    category: "Легковые",
  },
  {
    id: "3",
    name: "Tyumen Battery Premium 77Ah",
    price: 5900,
    capacity: 77,
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=800&auto=format&fit=crop",
    category: "Грузовые",
  },
  {
    id: "4",
    name: "Energizer Premium 100Ah",
    price: 10500,
    capacity: 100,
    image: "https://images.unsplash.com/photo-1606937295547-bc0f668595b3?q=80&w=800&auto=format&fit=crop",
    category: "Грузовые",
  },
];

const PopularProducts = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Популярные товары</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Самые востребованные модели аккумуляторов с отличными характеристиками
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularProducts.map((product) => (
            <BatteryCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/catalog">
            <Button variant="outline" size="lg">
              Смотреть все товары
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
