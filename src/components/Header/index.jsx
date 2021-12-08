import { Container, Menu, LogoHeader } from "./styles";
import Logo from "../../assets/images/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <LogoHeader>
        <img src={Logo} alt="Kenzie Academy" />
        <h3>Kenzie Shop</h3>
      </LogoHeader>
      <Menu>
        <Link to="/cart">
          <FiShoppingCart />
          <p>Carrinho</p>
        </Link>
      </Menu>
    </Container>
  );
};

export default Header;
