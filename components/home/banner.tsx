import Image from "next/image";
import banner from "@/public/banner.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import paths from "@/app/paths";

function Banner() {
  return (
    <div className="relative">
      <Image
        src={banner}
        alt="banner image"
        className="aspect-video h-auto max-h-[80vh] w-full"
        priority
      />
      <Button
        asChild
        variant={"destructive"}
        className="absolute bottom-8 mx-auto left-1/2 -translate-x-1/2"
      >
        <Link href={paths.category("new")}>Shop Now</Link>
      </Button>
    </div>
  );
}
export default Banner;
