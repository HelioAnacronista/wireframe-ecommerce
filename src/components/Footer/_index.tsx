import Networks from "./Networks";
import Navigation from "./Navigation";
import Credits from "./Credits";

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <Networks />
      <Navigation />
      <Credits />
    </footer>
  );
}

export default Footer;