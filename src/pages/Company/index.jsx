import styled from 'styled-components';
import BannerImg from '../../assets/images/company/banner.png';
import Navbar from '../../components/Navbar';
import Logo from '../../assets/images/company/logo.png';
import HeartOfHomes from '../../assets/images/company/heartOfHomes.png';
import Team from '../../assets/images/company/team.png';
import TeamMobile from '../../assets/images/company/team-mobile.png';
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
  left: calc(50% - 361px);
  bottom: 0;
`;
const MeetUsContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  margin-top: 60px;
  position: relative;
`;
const MeetUsHeader = styled.h2`
  width: 30%;
  color: #202020;
  font-size: 50px;
  margin: 0;
  font-weight: 900;
`;
const MeetUsText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  padding: 10px 20px;
  font-size: 25px;
  margin: 0;
  text-align: left;
  width: 30%;
`;
const LogoImg = styled.img`
  width: 150px;
  position: absolute;
  left: 75px;
  bottom: 170px;
`;
const HeartOfHomeContainer = styled.div`
  width: 100%;
  background-color: #075440;
  display: flex;
`;
const HeartOfHomesImg = styled.img`
  width: 100%;
  height: auto;
`;
const HeartTitle = styled.h3`
  color: white;
  font-size: 32px;
  margin: 0;
  font-weight: 300;
  font-family: 'FuturaMd';
  padding-bottom: 30px;
  text-align: left;
`;
const HeartText = styled.p`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 25px;
  margin: 0;
  text-align: left;
`;
const OurPeopleContainer = styled.div`
  width: 100%;
  background-color: #075440;
  height: 1200px;
  display: flex;
  flex-direction: column;
`;
const OurPeopleHeader = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 900;
  text-align: left;
  margin: 60px 110px;
  line-height: 1;
`;
const TeamImg = styled.img`
  width: 90;
  margin: auto;
  margin-top: 0;
`;
const Company = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', paddingTop: '20px' }}>
        <Banner src={BannerImg} />
        <Heading>Nuestro equipo.</Heading>
      </div>
      <MeetUsContainer>
        <LogoImg src={Logo} />
        <MeetUsHeader>CONOCENOS</MeetUsHeader>
        <MeetUsText>
          En HealthyVeg estamos orgullosos de nuestro equipo de trabajo y de su
          historia. Nos une la pasión por el detalle, la búsqueda de la
          excelencia y nuestra apuesta por mejorar la calidad de nuestros
          productos día a día.
          <br />
          <br />
          El bienestar de nuestros consumidores y del planeta es nuestro mayor
          compromiso. Es por esto que nos entusiasma la búsqueda constante de
          innovación y tecnología para mejorar todos y cada uno de los procesos
          que desarrollamos.
        </MeetUsText>
        <MeetUsText>
          Somos expertos en la producción de legumbres de calidad superior y
          libres de GMO. Estamos convencidos de que una alimentación saludable
          mejora la calidad de vida.
          <br />
          <br />
          Desarrollar productos innovadores, saludables y de calidad es lo que
          caracteriza a todo nuestro equipo de trabajo. Nuestros productos son
          el resultado de trabajar con pasión y compromiso.
        </MeetUsText>
      </MeetUsContainer>
      <HeartOfHomeContainer>
        <div style={{ width: '60%' }}>
          <HeartOfHomesImg src={HeartOfHomes} />
        </div>
        <div
          style={{
            display: 'flex',
            padding: '110px 60px 0 60px',
            flexDirection: 'column',
            width: '35%',
          }}
        >
          <HeartTitle>LLEGAMOS AL CORAZÓN DE LOS HOGARES.</HeartTitle>
          <HeartText>
            Trabajamos con responsabilidad y pasión para cumplir nuestros
            compromisos con el más alto estándar de calidad.
            <br />
            <br />
            Nos motiva estar a la altura del espacio que los consumidores nos
            brindan en su hogar y en sus familias.
          </HeartText>
        </div>
      </HeartOfHomeContainer>
      <OurPeopleContainer>
        <OurPeopleHeader>
          NUESTROS
          <br />
          PROTAGONISTAS
        </OurPeopleHeader>
        <TeamImg src={Team} />
      </OurPeopleContainer>
      <Footer />
    </>
  );
};

export default Company;
