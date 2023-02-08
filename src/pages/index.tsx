import CardProduct from "@/components/CardProduct/_index";
import Carousel from "@/components/Carousel/_index";
import RegisterEmail from "@/components/RegisterEmail/_index";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="container mt-10 rounded border-[2px] border-mainColor-200 p-10">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <RegisterEmail />
      </div>
    </>
  );
}
