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
      <h1 className="text-primary mb-8 text-center text-4xl">Trending</h1>
      <p className="text-secondary-foreground mb-8 text-center text-xl">
        Experience sustainable fashion that’s both stylish and socially
        responsible with our latest eco-friendly collection
      </p>
      <div className="grid grid-cols-3 items-center justify-center gap-4">
        {trendings.map((trend, index) => (
          <Image
            key={index}
            src={trend.src}
            alt={trend.alt}
            className="h-auto w-full "
          />
        ))}
      </div>
    </section>
  );
}
export default Trending;
