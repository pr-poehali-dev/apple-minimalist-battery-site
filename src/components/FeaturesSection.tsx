
import { Zap, ShieldCheck, Truck, Calculator } from "lucide-react";

const features = [
  {
    name: "Высокое качество",
    description: "Только проверенные аккумуляторы от ведущих производителей с длительным сроком службы.",
    icon: ShieldCheck,
  },
  {
    name: "Быстрая доставка",
    description: "Доставка по всей России. В Москве и области возможна доставка в день заказа.",
    icon: Truck,
  },
  {
    name: "Подбор по автомобилю",
    description: "Подберите идеальный аккумулятор для вашего автомобиля с помощью нашего калькулятора.",
    icon: Calculator,
  },
  {
    name: "Гарантия до 3 лет",
    description: "Предоставляем расширенную гарантию на все аккумуляторы в нашем магазине.",
    icon: Zap,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Почему выбирают нас</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Мы специализируемся на продаже автомобильных аккумуляторов уже более 10 лет
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
