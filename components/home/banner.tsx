import Image from "next/image";
import banner from "@/public/banner.jpg";

function Banner() {
  return (
    <Image
      src={banner}
      alt="banner image"
      className="w-full h-auto aspect-video max-h-[80vh]"
    />
  );
}
export default Banner;
