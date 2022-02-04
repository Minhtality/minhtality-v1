import React, { useState } from 'react';
import * as Styled from './index.styled';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen((e) => {
      const newState = !e;
      return newState;
    });
  };

  return (
    <Styled.Header>
      <Styled.NavContainer>
        <Styled.Heading>
          <a href='/'>Minh Tran</a>
        </Styled.Heading>
        <Styled.Menu onClick={handleMenuClick}>
          <HamburgerIcon isOpen={isOpen} />
        </Styled.Menu>
      </Styled.NavContainer>
    </Styled.Header>
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
