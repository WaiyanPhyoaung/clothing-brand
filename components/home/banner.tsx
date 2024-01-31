import Image from "next/image";
import banner from "@/public/banner.jpg";

function Banner() {
  return (
    <Image
      src={banner}
      alt="banner image"
      className="aspect-video h-auto max-h-[80vh] w-full"
      priority
    />
  );
}
export default Banner;
