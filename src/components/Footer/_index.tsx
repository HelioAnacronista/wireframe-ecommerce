import Credits from "./Credits";
import Navigation from "./Navigation";
import Networks from "./Networks";

interface NavigationProps {
  companyName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    number: number;
    district: string;
    city: string;
    state: string;
  };
}

const navProps: NavigationProps = {
  companyName: "My Company",
  email: "Company@example.com",
  phone: "1234567890",
  address: {
    street: "123 Main St",
    number: 456,
    district: "Downtown",
    city: "Anytown",
    state: "NY",
  },
};

function Footer() {
  return (
    <footer className="text-gray-600 bg-mainColor-50">
      <div className="container text-center lg:text-left">
        <Networks />
        <Navigation
          companyName={navProps.companyName}
          phone={navProps.phone}
          email={navProps.email}
          address={navProps.address}
        />
        <Credits />
      </div>
    </footer>
  );
}

export default Footer;
