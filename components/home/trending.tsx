import Image from "next/image";
import trending1 from "@/public/trending1.jpg";
import trending2 from "@/public/trending2.jpg";
import trending3 from "@/public/trending3.jpg";

const trendings = [
  { src: trending1, alt: "trendingimage" },
  { src: trending2, alt: "trendingimage" },
  { src: trending3, alt: "trendingimage" },
];
function Trending() {
  return (
    <section className="container py-16">
      <h1 className="mb-8 text-4xl text-center">Trending</h1>
      <div className="grid grid-cols-3 gap-4 justify-center items-center">
        {trendings.map((trend, index) => (
          <Image
            key={index}
            src={trend.src}
            alt={trend.alt}
            className="w-full h-auto "
          />
        ))}
      </div>
    </section>
  );
}
export default Trending;
