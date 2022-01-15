import React, { useState } from 'react';
import * as Styled from '../styles/hero.styled';

const projects = [
    {
        name: 'Model Page Redesign',
        description: ''
    }
]

const HamburgerIcon = ({ isOpen }) => (
    <Styled.Hamburger isOpen={isOpen}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </Styled.Hamburger>
  );

export const Hero = () => {
    const [isOpen, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen( e => {
            const newState = !e;
            return newState;
        })
    }
    return (
        <Styled.Container>
            <Styled.Heading><a href="/">Minh Tran</a></Styled.Heading>
            <Styled.Menu onClick={handleMenuClick}><HamburgerIcon isOpen={isOpen} /></Styled.Menu>
        </Styled.Container>
    )
};

export default Hero;