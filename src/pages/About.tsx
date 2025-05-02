
import { ChevronRight, Award, Users, TrendingUp, ShieldCheck, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-8">
      {/* Хлебные крошки */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary">Главная</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-900">О компании</span>
        </div>
      </div>

      {/* Заголовок страницы */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900">О компании PowerCell</h1>
        <div className="h-1 w-20 bg-primary mt-4"></div>
      </div>

      {/* Основная информация */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Наша миссия</h2>
              <p className="mt-6 text-lg text-gray-600">
                PowerCell – ведущий поставщик автомобильных аккумуляторов с более чем 10-летним опытом работы на рынке.
                Наша компания основана в 2014 году группой энтузиастов, которые поставили перед собой цель предоставлять
                только качественные аккумуляторы по доступным ценам.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Мы работаем напрямую с производителями, минуя посредников, что позволяет нам предлагать лучшие
                цены на рынке и гарантировать оригинальность каждого аккумулятора.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Наша миссия — обеспечивать автовладельцев надежными источниками энергии для их транспортных средств,
                предоставляя при этом первоклассный сервис и профессиональные консультации.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1603731573971-8fcd56776f87?q=80&w=800&auto=format&fit=crop" 
                alt="Офис компании PowerCell" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Наши преимущества */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">Наши преимущества</h2>
          <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto">
            PowerCell сочетает опыт, профессионализм и индивидуальный подход к каждому клиенту
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Опыт работы</h3>
                <p className="mt-2 text-gray-600">Более 10 лет на рынке автомобильных аккумуляторов</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Команда</h3>
                <p className="mt-2 text-gray-600">Профессиональные сотрудники с техническим образованием</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Рост</h3>
                <p className="mt-2 text-gray-600">Постоянное расширение ассортимента и улучшение сервиса</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Гарантия</h3>
                <p className="mt-2 text-gray-600">Расширенная гарантия на все типы аккумуляторов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">Наша команда</h2>
          <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto">
            Профессионалы своего дела, которые помогут подобрать идеальный аккумулятор для вашего автомобиля
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
                alt="Алексей Иванов" 
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Алексей Иванов</h3>
              <p className="text-gray-600">Генеральный директор</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" 
                alt="Елена Петрова" 
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Елена Петрова</h3>
              <p className="text-gray-600">Руководитель отдела продаж</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop" 
                alt="Дмитрий Сидоров" 
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Дмитрий Сидоров</h3>
              <p className="text-gray-600">Технический директор</p>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">Наши контакты</h2>
          <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Адрес</h3>
                <p className="mt-2 text-gray-600">г. Москва, ул. Аккумуляторная, 10</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Телефон</h3>
                <p className="mt-2 text-gray-600">8 (800) 123-45-67</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Email</h3>
                <p className="mt-2 text-gray-600">info@powercell.ru</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">Связаться с нами</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
