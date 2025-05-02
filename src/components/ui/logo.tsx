
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("font-bold tracking-tight", sizeClasses[size], className)}>
      <span>Power</span>
      <span className="text-primary">Cell</span>
    </div>
  );
};

export default Logo;
