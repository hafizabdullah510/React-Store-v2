const CarousalItem = ({ src }: { src: string }) => {
  return (
    <div className="carousel-item">
      <img src={src} className="w-80 h-full object-cover rounded-xl shrink-0" />
    </div>
  );
};
export default CarousalItem;
