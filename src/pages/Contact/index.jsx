import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BannerImg from '../../assets/images/contact/banner.jpg';
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
const HeartTitle = styled.h3`
  color: black;
  font-size: 32px;
  margin: 0;
  font-weight: 300;
  font-family: 'FuturaMd';
  padding-bottom: 30px;
  text-align: left;
  width: 100%;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 750px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(2) {
    width: 50%;
  }
`;
const Iframe = styled.iframe`
  width: 500px;
  height: 350px;
  border: 0;
  padding: 20px;
`;
const Text = styled.p`
  color: black;
  font-size: 16px;
  margin: 0;
  text-align: left;
  width: 100%;
  padding: 10px 20px;
  & span {
    color: #fbb811;
  }
`;
const Form = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  & input {
    padding: 10px 20px;
    width: 100%;
    &:nth-child(1) {
      width: 42%;
    }
    &:nth-child(2) {
      width: 42%;
    }
    &.phone {
      width: 42%;
      margin: 20px 0;
    }
  }
  & textarea {
    padding: 10px 20px;
  }
`;
const Button = styled.button`
  color: white;
  background: #075440;
  border: none;
  padding: 20px 10px;
  margin-top: 20px;
  width: 100px;
  align-self: flex-end;
`;
const index = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', paddingTop: '20px' }}>
        <Banner src={BannerImg} />
        <Heading>Contactanos.</Heading>
      </div>
      <Container>
        <Column>
          <HeartTitle>CONTACTO</HeartTitle>
          <Iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.952350720988!2d-60.408611099999995!3d-34.096361099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9a95084f39feb%3A0x32afff996a11283e!2sHEALTHYVEG%20SA%20acopio%2C%20clasificaci%C3%B3n%2C%20fraccionado%20y%20exportaci%C3%B3n%20de%20legumbres!5e0!3m2!1ses!2sar!4v1669989283223!5m2!1ses!2sar'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          />
          <Text>
            <strong>Medios de contacto:</strong>
          </Text>
          <Text>
            <strong>Teléfono (rotatividad ilimitada): </strong>
            <span>+54 11 5263-7862</span>
          </Text>
          <Text>
            <strong>Email:</strong> <span>ventas@rumbosrl.com.ar</span>
          </Text>
          <Text>
            <strong>Horario:</strong> Lun. a vie. de 8:00 a 13:00 y de 13:45 a
            17:30hs.
          </Text>
          <Text>
            <strong>Dirección / Ubicación:</strong> Acceso ruta 32 y, Av.
            Independencia, B2743 Arroyo Dulce
          </Text>
        </Column>
        <Column>
          <Form>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input type='text' placeholder='Nombre completo'></input>
              <input type='text' placeholder='Correo electrónico'></input>
            </div>
            <input type='text' placeholder='Teléfono' className='phone'></input>
            <textarea rows='4' cols='50' placeholder='Consulta'></textarea>
          </Form>
          <Button>Enviar</Button>
        </Column>
      </Container>

      <Footer />
    </>
  );
};

export default index;
