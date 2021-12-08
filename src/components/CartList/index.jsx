import { Container, Text } from "./styles";

const CartList = ({ product }) => {
  const value = product.price;
  return (
    <Container>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <Text>
        <p>{product.name}</p>
        <p>R$ {value.toFixed(2)}</p>
      </Text>
    </Container>
  );
};

export default CartList;
