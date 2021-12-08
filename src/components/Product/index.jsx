import { Button, Container, Image, Paragraph, Text } from "./styles";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/Cart/thunks";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Image>
        <img src={product.image} alt={product.name} />
      </Image>
      <Text>
        <h5>{product.name}.</h5>
        <Paragraph>{product.description}. </Paragraph>
        <span>{product.categorie}</span>
        <Paragraph priceSchema>R$ {product.price.toFixed(2)} </Paragraph>
      </Text>
      <Button>
        <button type="button" onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar ao carrinho
        </button>
      </Button>
    </Container>
  );
};

export default Product;
