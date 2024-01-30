import Banner from "@/components/home/banner";
import Trending from "@/components/home/trending";

export default function Home() {
  return (
    <div className="h-[400vh]">
      <Banner />
      <Trending />
    </div>
  );
}
