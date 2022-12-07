import { useState } from 'react';
import {
  Route,
  Link,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/images/logo_dark.png';
import { ReactComponent as SearchLogo } from '../../assets/images/navbar/search.svg';
import ArFlag from '../../assets/images/navbar/ar-flag.png';
import UsFlag from '../../assets/images/navbar/us-flag.png';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 35px;
  position: ${(props) => (props.isHome ? 'absolute' : 'inherit')};
`;
const NavSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 35%;
  height: 100%;
  margin: auto;
`;
const Image = styled.img`
  max-width: ${(props) => (props.homeStyle ? '350px' : '180px')};
  padding-top: ${(props) => (props.homeStyle ? '125px' : '50px')};
  z-index: 1;
`;

const NavLink = styled(Link)`
  color: #6d9773;
  font-size: 22px;
  font-family: 'FuturaStdCondensedBold', sans-serif;
  background: none;
  border: none;
  display: flex;
  text-decoration: none;
  & img {
    height: auto;
    width: 50px;
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 2px solid #6d9773;
  color: #6d9773;
  background: transparent;
  box-sizing: content-box;
  &:focus-visible {
    outline: none;
  }
`;

const Navbar = ({ isHome }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState('');

  const handleInputSubmit = ({ key }) => {
    if (key === 'Enter') {
      navigate(`/products/${searchFilter}`);
    }
  };

  return (
    <Nav isHome={isHome}>
      <NavSide>
        <NavLink to='/company'>COMPAÑÍA</NavLink>
        {/* <NavLink to='/community'>COMUNIDAD</NavLink> */}
        <NavLink to='/products'>PRODUCTOS</NavLink>
      </NavSide>
      <Image
        src={Logo}
        homeStyle={isHome ? true : false}
        onClick={() => navigate('/')}
      />
      <NavSide>
        <NavLink to='/contact'>CONTACTO</NavLink>
        <NavLink>
          <SearchLogo
            style={{ width: '30px', marginRight: '10px', fill: '#6d9773' }}
          />
          <Input
            type='text'
            onChange={(e) => setSearchFilter(e.target.value)}
            onKeyDown={handleInputSubmit}
          />
        </NavLink>
        <NavLink>
          <img src={ArFlag} />
          <img src={UsFlag} />
        </NavLink>
      </NavSide>
    </Nav>
  );
};

export default Navbar;
