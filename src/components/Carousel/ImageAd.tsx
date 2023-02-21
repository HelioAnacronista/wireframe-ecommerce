type AdImageProps = {
  src?: string;
  alt?: string;
};

function AdImage({ src, alt }: AdImageProps) {
  return (
    <img
      src={src}
      width={1920}
      height={1080}
      alt={alt}
      className="z-0 object-cover sm:h-[592px] sm:w-[592px]"
    />
  );
}

export default AdImage;
