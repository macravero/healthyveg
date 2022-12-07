import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import HomeCarousel from '../../components/HomeCarousel';
import Footer from '../../components/Footer';
import Logo from '../../assets/images/home/logo-orange.png';
import PlantsBg from '../../assets/images/home/more-plants.jpg';
import DonVittoLogo from '../../assets/images/home/donvitto-logo.png';
import DonVittoProducts from '../../assets/images/home/donvitto-productos.png';

const HealthyContainer = styled.div`
  width: 100%;
  height: 470px;
  background: #fdfcf5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HealthyTitle = styled.h1`
  color: #202020;
  font-size: 70px;
  margin: 0;
  margin-top: 60px;
`;
const HealthyText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  padding: 0 65px;
  font-size: 25px;
  margin: 0;
  margin-bottom: 30px;
`;
const HealthyLogo = styled.img`
  position: absolute;
  top: 40px;
  left: 50px;
  width: 125px;
  height: auto;
`;
const MorePlantsContainer = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${PlantsBg});
  background-size: cover;
`;
const MorePlantsTextContent = styled.div`
  padding-top: 60px;
  padding-left: 51%;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const MorePlantsTitle = styled.h1`
  color: white;
  font-size: 32px;
  margin: 0;
  font-weight: 300;
  font-family: 'FuturaMd';
`;
const MorePlantsContent = styled.p`
  color: white;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  text-align: left;
  margin: 0;
  margin-top: 25px;
`;
const DonVittoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-top: 80px;
  position: relative;
  padding-bottom: 0;
`;
const DonVittoLogoImg = styled.img`
  height: 125px;
  width: auto;
`;
const DonVittoProductsImg = styled.img`
  width: 1340px;
  height: auto;
  margin: auto;
`;
const DonVittoContent = styled.p`
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  text-align: center;
  margin: 0;
  margin-top: 25px;
  padding-left: calc(50% - 384px);
`;
function Home() {
  return (
    <>
      <Navbar isHome={true} />
      <HomeCarousel />
      <HealthyContainer>
        <HealthyLogo src={Logo} />
        <HealthyTitle>COME SANO, VIVE SANO.</HealthyTitle>
        <HealthyText>
          Somos una empresa que produce y comercializa legumbres integrando
          todos los eslabones del proceso desde la siembra y el acopio hasta su
          venta. Seleccionamos, producimos y comercializamos de forma
          responsable legumbres que mejoran la calidad de vida de nuestros
          consumidores y clientes garantizando el gran sabor, textura y
          nutrición que demandan.
        </HealthyText>
      </HealthyContainer>
      <MorePlantsContainer>
        <MorePlantsTextContent>
          <MorePlantsTitle>MÁS PLANTAS POR FAVOR.</MorePlantsTitle>
          <MorePlantsContent>
            Nuestros productos están en la cocina, se comparten en la mesa,
            viven en momentos reconfortantes y de nutrición. Nuestro objetivo
            principal es hacer estos momentos más especiales, sabrosos y
            cálidos.
          </MorePlantsContent>
          <MorePlantsContent>
            Trabajamos con responsabilidad y pasión para cumplir nuestros
            compromisos con el más alto estándar de calidad. Nos motiva estar a
            la altura del espacio que los consumidores nos brindan en su hogar y
            en sus familias.
          </MorePlantsContent>
        </MorePlantsTextContent>
      </MorePlantsContainer>
      <DonVittoContainer>
        <div style={{ display: 'flex', marginBottom: '100px' }}>
          <DonVittoLogoImg src={DonVittoLogo} />
          <DonVittoContent>
            Conocé nuestra marca exclusiva de legumbres y productos derivados
            fragmentados para venta directa. Próximamente en tiendas de primera
            línea!
          </DonVittoContent>
        </div>
        <DonVittoProductsImg src={DonVittoProducts} />
      </DonVittoContainer>
      <Footer />
    </>
  );
}

export default Home;
