
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Алексей Смирнов",
    role: "Владелец Toyota Camry",
    rating: 5,
    content: "Приобрел аккумулятор Bosch S4. Очень доволен качеством и обслуживанием. Быстрая доставка и профессиональная установка. Уже рекомендовал друзьям!",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ирина Козлова",
    role: "Владелец Volkswagen Polo",
    rating: 5,
    content: "Менеджер помог подобрать идеальный аккумулятор для моего автомобиля через калькулятор на сайте. Цена оказалась ниже, чем в других магазинах.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Михаил Петров",
    role: "Автомеханик",
    rating: 5,
    content: "Как профессионал в области автосервиса, могу сказать, что аккумуляторы от PowerCell - одни из лучших на рынке. Рекомендую всем своим клиентам!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star 
      key={index} 
      className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
    />
  ));
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Отзывы наших клиентов</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Узнайте, что говорят о нас те, кто уже приобрел наши аккумуляторы
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="mt-4 text-gray-600 line-clamp-4">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
