import React, { useState } from 'react';
import * as Styled from '../Styles/hero.styled';

export const Hero = () => {
    return (
        <Styled.Page>
            <Styled.Container>
                <Styled.Greeting>Hello, my name is Minh</Styled.Greeting>
                <Styled.AboutMe>Front-End Developer, Los Angeles</Styled.AboutMe>
            </Styled.Container>
            <img src="https://images.unsplash.com/photo-1635977079155-58523a8bc317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        </Styled.Page>
    )
};

export default Hero;