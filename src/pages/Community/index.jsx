import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import BannerImg from '../../assets/images/community/community.png';
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
  left: calc(50% - 270px);
  bottom: 0;
`;

const Community = () => {
  return (
    <div style={{ Height: '900px' }}>
      <Navbar />
      <div style={{ position: 'relative', paddingTop: '20px' }}>
        <Banner src={BannerImg} />
        <Heading>Comunidad.</Heading>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
