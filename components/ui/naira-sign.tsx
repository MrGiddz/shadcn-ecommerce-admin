import Image from "next/image";
import icons from "currency-icons";
import { cn } from "@/lib/utils";

interface NairaSignProps {
  width?: number;
  height?: number;
  className?: string;
}

const NairaSign: React.FC<NairaSignProps> = ({
  width = 4,
  height = 4,
  className
}) => {
  return (
    <Image
      src={icons["NGN"]?.icon!}
      alt="image icon"
      width={width}
      height={height}
      className={cn("w-4 h-4", className)}
    />
  );
};

export default NairaSign;
