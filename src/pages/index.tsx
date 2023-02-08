import CardProduct from "@/components/CardProduct/_index";
import Carousel from "@/components/Carousel/_index";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="container mt-10 rounded border-[1.5px] border-mainColor-300 p-10">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
