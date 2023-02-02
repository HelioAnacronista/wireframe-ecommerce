import Networks from "./Networks";
import Navigation from "./Navigation";
import Credits from "./Credits";

function Footer() {
  return (
    <footer className="text-gray-600 bg-mainColor-50">
      <div className="container text-center lg:text-left">
        <Networks />
        <Navigation />
        <Credits />
      </div>
    </footer>
  );
}

export default Footer;
