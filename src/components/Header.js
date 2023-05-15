import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="https://u24.gov.ua/uk">
        <img className="logo" src={logo} alt="donate to ukraine"/>
      </a>
      <NavLinks />
    </header>
  );
};

export default Header;
