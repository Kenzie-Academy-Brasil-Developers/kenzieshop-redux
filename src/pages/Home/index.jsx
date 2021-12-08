import { useSelector } from "react-redux";
import Product from "../../components/Product";
import { ProductList } from "./styles";
import LayoutContainer from "../../components/LayoutContainer";

const Home = () => {
  const products = useSelector((store) => store.products);

  return (
    <LayoutContainer>
      <ProductList>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductList>
    </LayoutContainer>
  );
};

export default Home;
