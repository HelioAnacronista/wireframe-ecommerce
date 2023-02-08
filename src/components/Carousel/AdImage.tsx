function AdImage() {
  return (
    <img
      src={`https://picsum.photos/id/1/1920/1080`}
      width={1920}
      height={1080}
      alt={`Slide 1`}
      className="object-cover sm:h-[592px] sm:w-[592px]"
    />
  );
}

export default AdImage;
