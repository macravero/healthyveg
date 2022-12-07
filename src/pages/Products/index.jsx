import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Product from './Product';
import productData from '../../assets/data';
import BannerImg from '../../assets/images/products/banner.jpg';
import Footer from '../../components/Footer';

const Banner = styled.img`
  width: 100%;
  height: auto;
`;
const Heading = styled.h1`
  color: white;
  font-size: 95px;
  text-shadow: black 1px 0 150px;
  position: absolute;
  left: calc(50% - 452px);
  bottom: 0;
`;
const ProductsSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 20px;
`;
const FilterButton = styled.button`
  color: ${(props) => (props.active ? '#075449' : '#6d9773')};
  background: none;
  border: none;
  margin: 0 40px;
  font-family: 'FuturaMd';
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;
const NoProducts = styled.p`
  width: 100%;
  padding-left: 100px;
  margin-bottom: 160px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 25px;
  text-align: left;
`;
const Products = () => {
  const { filter } = useParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [products, setProducts] = useState(productData);

  useEffect(() => {
    if (activeFilter !== 'all') {
      const filtered = productData.filter((el) => el.type === activeFilter);
      setProducts(filtered);
    } else {
      setProducts(productData);
    }
  }, [activeFilter]);

  useEffect(() => {
    if (filter) {
      const filtered = productData.filter(({ title, subtitle, type }) => {
        const _filter = filter.toLowerCase();
        const _title = title?.toLowerCase();
        const _subtitle = subtitle?.toLowerCase();
        const _type = type?.toLowerCase();
        return (
          _title?.includes(_filter) ||
          _subtitle?.includes(_filter) ||
          _type?.includes(_filter)
        );
      });
      setProducts(filtered);
    } else {
      setActiveFilter('all');
      setProducts(productData);
    }
  }, [filter]);

  const activateFilter = (filter) => {
    setProducts(productData);
    setActiveFilter(filter);
  };
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', paddingTop: '20px' }}>
        <Banner src={BannerImg} />
        <Heading>Nuestros Productos.</Heading>
      </div>
      <ProductsSectionContainer>
        <FilterButtonContainer>
          <FilterButton
            active={activeFilter === 'all'}
            onClick={() => activateFilter('all')}
          >
            TODOS
          </FilterButton>
          <FilterButton
            active={activeFilter === 'legumbres'}
            onClick={() => activateFilter('legumbres')}
          >
            LEGUMBRES
          </FilterButton>
          <FilterButton
            active={activeFilter === 'derivados'}
            onClick={() => activateFilter('derivados')}
          >
            DERIVADOS
          </FilterButton>
        </FilterButtonContainer>
        <ProductsContainer>
          {products.map((el) => (
            <Product prod={el} />
          ))}
          {!products.length && (
            <NoProducts>
              No hemos encontrado ningún producto relacionado a su búsqueda.
            </NoProducts>
          )}
        </ProductsContainer>
      </ProductsSectionContainer>
      <Footer />
    </>
  );
};

export default Products;
