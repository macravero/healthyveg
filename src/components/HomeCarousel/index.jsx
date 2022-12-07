import { useState } from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import ImageOne from '../../assets/images/home/carousel_1.jpg';
import ImageTwo from '../../assets/images/home/carousel_2.jpg';
import ImageThree from '../../assets/images/home/carousel_3.jpg';
import ImageFour from '../../assets/images/home/carousel_4.jpg';
import ImageFive from '../../assets/images/home/carousel_5.jpg';

const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];

const CarouselContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 5%;
  left: calc(50% - 75px);
  z-index: ;
`;
const CarouselBullet = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  margin: 5px;
  background: ${(props) => (props.filled ? 'white' : 'transparent')};
`;
const Heading = styled.h1`
  color: white;
  font-size: 92px;
  text-shadow: black 1px 0 150px;
  position: absolute;
  left: calc(50% - 316px);
  bottom: 22%;
  line-height: 100%;
`;
const HomeCarousel = () => {
  const [selectedCarousel, setSelectedCarousel] = useState(1);
  return (
    <div>
      <Heading>
        Excelencia <br />
        en legumbres.
      </Heading>
      <img src={images[selectedCarousel]} style={{ width: '100%' }} />
      <CarouselContainer>
        <CarouselBullet
          onClick={() => setSelectedCarousel(0)}
          filled={selectedCarousel === 0}
        />
        <CarouselBullet
          onClick={() => setSelectedCarousel(1)}
          filled={selectedCarousel === 1}
        />
        <CarouselBullet
          onClick={() => setSelectedCarousel(2)}
          filled={selectedCarousel === 2}
        />
        <CarouselBullet
          onClick={() => setSelectedCarousel(3)}
          filled={selectedCarousel === 3}
        />
        <CarouselBullet
          onClick={() => setSelectedCarousel(4)}
          filled={selectedCarousel === 4}
        />
      </CarouselContainer>
    </div>
  );
};

export default HomeCarousel;
