import Image from "next/image";
import banner from "@/public/banner.avif";

export default function Home() {
  return (
    <div className="h-[400vh]">
      <Image
        src={banner}
        alt="banner image"
        className="w-full h-screen aspect-video"
      />
    </div>
  );
}
