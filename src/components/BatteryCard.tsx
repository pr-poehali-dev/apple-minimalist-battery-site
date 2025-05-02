
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface BatteryCardProps {
  id: string;
  name: string;
  price: number;
  capacity: number;
  image: string;
  category: string;
}

const BatteryCard = ({ id, name, price, capacity, image, category }: BatteryCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <Link to={`/catalog/${id}`}>
          <h3 className="font-medium text-gray-900 hover:text-primary line-clamp-2 h-12">{name}</h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-gray-500">{capacity} Ач</div>
          <div className="font-medium">{price.toLocaleString()} ₽</div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">В корзину</Button>
      </CardFooter>
    </Card>
  );
};

export default BatteryCard;
