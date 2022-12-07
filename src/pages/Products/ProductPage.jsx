import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/products/LOGO-BLANCO.png';
import Placeholder from '../../assets/images/products/arvejas_verdes.png';
import Back from '../../assets/images/products/back.png';

const Header = styled.div`
  background-color: #075449;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  & img {
    max-width: 150px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  background-color: #202020;
  height: calc(100vh - 154px);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
  padding: 45px;
  &:first-child {
    padding-bottom: 100px;
    padding-left: 85px;
  }
  &:last-child {
    padding-bottom: 180px;
  }
`;
const Title = styled.h1`
  color: white;
  font-size: 70px;
  text-shadow: black 1px 0 150px;
  margin: 25px 0;
  text-transform: capitalize;
  line-height: 110%;
  text-align: left;
`;
const SubHeading = styled.h2`
  margin: 0;
  padding: 0;
  color: #6d9773;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: none;
  position: relative;
  &:before {
    content: '';
    width: 25px;
    height: 2px;
    border-bottom: 3px solid #6d9773;
    position: absolute;
    left: -20px;
    bottom: 15px;
    transform: rotate(125deg);
  }
  &:after {
    content: '';
    width: 25px;
    height: 2px;
    border-bottom: 3px solid #6d9773;
    position: absolute;
    left: -20px;
    top: 18px;
    transform: rotate(-135deg);
  }
`;
const DownloadLink = styled.button`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 20px;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: none;
  position: relative;
`;
const Text = styled.p`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 20px;
  margin: 0;
  text-align: left;
  padding-bottom: 20px;
`;
const IconContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;
const Icon = styled.img`
  width: 60px;
  margin: 10px;
`;
const ProductImg = styled.img`
  width: 325px;
`;
const Table = styled.table`
  color: white;
  text-align: left;
  border-collapse: collapse;
  font-size: 13px;
`;
const Row = styled.tr`
  &:first-child {
    border-bottom: 1px solid white;
  }
  &:nth-child(2) {
    border-bottom: 1px solid white;
  }
  & td:nth-child(3) {
    text-align: center;
  }
`;
const Presentation = styled.div`
  color: #6d9773;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  & h1 {
    line-height: 1;
    margin-bottom: 0;
    margin-left: 0;
    font-size: 50px;
  }
  & ul {
    font-weight: bold;
    font-style: italic;
    padding-left: 20px;
  }
`;
const ProductPage = () => {
  console.log('enters');
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    title,
    description,
    pictures,
    sinTacc,
    sinConservantes,
    sinLactosa,
    sinAzucar,
    nutritionalValues,
  } = state;
  console.log('state', state);
  return (
    <>
      <Header>
        <SubHeading onClick={() => navigate(-1)}>
          VOLVER A 'PRODUCTOS'
        </SubHeading>
        <img src={Logo} alt='logo' />
        <DownloadLink>DESCARGAR FICHA DE PRODUCTO</DownloadLink>
      </Header>
      <Container>
        <Column>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <IconContainer>
            {sinTacc && <Icon src={Placeholder} alt='icono' />}
            {sinConservantes && <Icon src={Placeholder} alt='icono' />}
            {sinLactosa && <Icon src={Placeholder} alt='icono' />}
            {sinAzucar && <Icon src={Placeholder} alt='icono' />}
          </IconContainer>
        </Column>
        <Column>
          <ProductImg src={pictures[1]} />
        </Column>
        <Column>
          <Presentation>
            <h1>
              Nuestras <br /> Presentaciones
            </h1>
            <ul>
              <li>500 G</li>
              <li>10 KG</li>
              <li>1 TONELADA</li>
              <li>10 TONELADAS</li>
            </ul>
          </Presentation>
          <Table>
            <Row>
              <th></th>
              <th>
                Cantidad por <br /> porción
              </th>
              <th>% VD(*)</th>
              <th>Por 100 g.</th>
            </Row>
            <Row>
              <td>Valor energético</td>
              <td>{nutritionalValues.valorEnergetico[0]}</td>
              <td>{nutritionalValues.valorEnergetico[1]}</td>
              <td>{nutritionalValues.valorEnergetico[2]}</td>
            </Row>
            <Row>
              <td>Carbohidratos</td>
              <td>{nutritionalValues.carbohidratos[0]}</td>
              <td>{nutritionalValues.carbohidratos[1]}</td>
              <td>{nutritionalValues.carbohidratos[2]}</td>
            </Row>
            <Row>
              <td>Proteínas</td>
              <td>{nutritionalValues.proteinas[0]}</td>
              <td>{nutritionalValues.proteinas[1]}</td>
              <td>{nutritionalValues.proteinas[2]}</td>
            </Row>
            <Row>
              <td>Grasas totales</td>
              <td>{nutritionalValues.grasasTotales[0]}</td>
              <td>{nutritionalValues.grasasTotales[1]}</td>
              <td>{nutritionalValues.grasasTotales[2]}</td>
            </Row>
            <Row>
              <td>Grasas saturadas</td>
              <td>{nutritionalValues.grasasSaturadas[0]}</td>
              <td>{nutritionalValues.grasasSaturadas[1]}</td>
              <td>{nutritionalValues.grasasSaturadas[2]}</td>
            </Row>
            <Row>
              <td>Grasas trans</td>
              <td>{nutritionalValues.grasasTrans[0]}</td>
              <td>{nutritionalValues.grasasTrans[1]}</td>
              <td>{nutritionalValues.grasasTrans[2]}</td>
            </Row>
            <Row>
              <td>Fibra alimentaria</td>
              <td>{nutritionalValues.fibraAlimentaria[0]}</td>
              <td>{nutritionalValues.fibraAlimentaria[1]}</td>
              <td>{nutritionalValues.fibraAlimentaria[2]}</td>
            </Row>
            <Row>
              <td>Sodio</td>
              <td>{nutritionalValues.sodio[0]}</td>
              <td>{nutritionalValues.sodio[1]}</td>
              <td>{nutritionalValues.sodio[2]}</td>
            </Row>
          </Table>
        </Column>
      </Container>
    </>
  );
};

export default ProductPage;
