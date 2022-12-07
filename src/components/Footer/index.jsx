import styled from 'styled-components';
import FooterImg from '../../assets/images/footer/FooterImg.png';
import InstagramIcon from '../../assets/images/footer/ig.png';
import LinkedInIcon from '../../assets/images/footer/linkedin.png';
import WhatsappIcon from '../../assets/images/footer/whatsapp.png';
import YoutubeIcon from '../../assets/images/footer/youtube.png';
import PinIcon from '../../assets/images/footer/pin.png';
import PhoneIcon from '../../assets/images/footer/phone.png';
import MailIcon from '../../assets/images/footer/mail.png';

const FooterContainer = styled.div`
  height: auto;
  position: relative;
  margin-top: auto;
  min-height: 360px;
`;
const StyledFooterImg = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const Youtube = styled.img`
  position: absolute;
  width: 55px;
  top: 20%;
  right: 6%;
  z-index: 1;
`;
const Instagram = styled.img`
  position: absolute;
  width: 55px;
  top: 20%;
  right: 11%;
  z-index: 1;
`;
const Whatsapp = styled.img`
  position: absolute;
  width: 55px;
  top: 20%;
  right: 16%;
  z-index: 1;
`;
const LinkedIn = styled.img`
  position: absolute;
  width: 55px;
  top: 20%;
  right: 21%;
  z-index: 1;
`;
const LeftContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: left;
  align-items: flex-start;
  padding-top: 50px;
  padding-left: 50px;
  color: white;
  list-style-type: none;
  text-decoration: none;
  width: 50%;

  & img {
    max-width: 55px;
  }
  & ul {
    text-align: left;
    list-style-type: none;
    & li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-bottom: 10px;
      font-size: 18px;
      font-style: italic;
      &:first-child {
        font-weight: bold;
        font-style: normal;
      }
      & img {
        padding-right: 10px;
      }
    }
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <LeftContainer>
        <ul>
          <li>
            <img src={PhoneIcon} />
            (02477) 491-681
          </li>
          <li>
            <img src={MailIcon} />
            contacto@hveg.com.ar
          </li>
          <li>
            <img src={PinIcon} />
            Ruta 32 y Av. Independencia
            <br /> Arroyo Dulce BA. - 2743
          </li>
        </ul>
      </LeftContainer>
      <Youtube src={YoutubeIcon} />
      <Instagram src={InstagramIcon} />
      <Whatsapp src={WhatsappIcon} />
      <LinkedIn src={LinkedInIcon} />
      <StyledFooterImg src={FooterImg} />
    </FooterContainer>
  );
};

export default Footer;
