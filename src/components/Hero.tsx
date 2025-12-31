import { Link } from "react-router-dom";
import CarousalItem from "../ui/CarousalItem";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => {
  return (
    <main className="grid lg:grid-cols-2 lg:items-center gap-24">
      <div>
        <h1 className="max-w-2xl text-4xl tracking-tight font-bold sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <Link
          to="/products"
          className="mt-10 btn btn-primary uppercase tracking-wide"
        >
          our products
        </Link>
      </div>
      <div className="carousel carousel-center p-4 gap-4 h-112 max-lg:hidden bg-neutral rounded-xl">
        <CarousalItem src={hero1} />
        <CarousalItem src={hero2} />
        <CarousalItem src={hero3} />
        <CarousalItem src={hero4} />
      </div>
    </main>
  );
};
export default Hero;
