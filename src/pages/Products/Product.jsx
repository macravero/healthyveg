import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 32%;
  min-height: 550px;
`;
const ProductImage = styled.img`
  width: 350px;
  height: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
`;
const ProductHeading = styled.h1`
  margin: 0;
  padding: 0;
  color: #075449;
  font-size: 45px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  max-width: 75%;
  text-align: center;
  cursor: pointer;
`;
const ProductSubheading = styled.h2`
  margin: 0;
  padding: 0;
  color: #075449;
  font-size: 45px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
`;
const Product = ({ prod }) => {
  const navigate = useNavigate();
  return (
    <ProductContainer>
      <ProductImage
        src={prod.pictures[0]}
        onClick={() => navigate(`/product/${prod.id}`, { state: prod })}
      />
      <ProductHeading>{prod.title}</ProductHeading>
      {prod.subtitle && <ProductSubheading>{prod.subtitle}</ProductSubheading>}
    </ProductContainer>
  );
};

export default Product;
