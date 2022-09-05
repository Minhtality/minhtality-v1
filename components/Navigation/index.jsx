import React, { useState } from 'react';
import * as Styled from './index.styled';
import Sticky from 'react-sticky-el';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen((e) => {
      const newState = !e;
      return newState;
    });
  };

  return (
  <Sticky isIOSFixEnabled={false} stickyStyle={{ zIndex: 5 }} style={{position: 'relative', zIndex: 4}}>
      <Styled.NavContainer>
        <Styled.Heading>
          <a href='/'>Minh Tran</a>
        </Styled.Heading>
        <Styled.Menu onClick={handleMenuClick}>
          <HamburgerIcon isOpen={isOpen} />
        </Styled.Menu>
      </Styled.NavContainer>
  </Sticky>
  );
};

const HamburgerIcon = ({ isOpen }) => (
  <Styled.Hamburger isOpen={isOpen}>
    <div className='bar1' />
    <div className='bar2' />
    <div className='bar3' />
  </Styled.Hamburger>
);

export default Navigation;
