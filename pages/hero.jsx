import React, { useState } from 'react';
import * as Styled from '../styles/hero.styled';

const Cards = [
    {   
        heading: 'Model Page Redesign1',
        description: '',
        image: {
            src: '',
            alt: '',
        }
    },
    {   
        heading: 'Model Page Redesign2',
        description: '',
        image: {
            src: '',
            alt: '',
        }
    },
    {   
        heading: 'Model Page Redesign3',
        description: '',
        image: {
            src: '',
            alt: '',
        }
    },
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
        <Styled.Page>
        <Styled.NavContainer>
            <Styled.Heading><a href="/">Minh Tran</a></Styled.Heading>
            <Styled.Menu onClick={handleMenuClick}><HamburgerIcon isOpen={isOpen} /></Styled.Menu>
        </Styled.NavContainer>
        {/* <Styled.Gallery>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img1" />
                <div>hi</div>
            </Styled.CardContainer>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img2" />
            </Styled.CardContainer>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img3" />
            </Styled.CardContainer>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img4" />
            </Styled.CardContainer>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img5" />
            </Styled.CardContainer>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img6" />
            </Styled.CardContainer>
        </Styled.Gallery> */}
        <Styled.GridContainer>
            <Styled.Left>
                <Styled.CardContainer>
                    <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img1" />
                </Styled.CardContainer>
            </Styled.Left>
            <Styled.Right>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img2"/>
            </Styled.CardContainer>
            <Styled.CardContainer>
                <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="img3"/>
            </Styled.CardContainer>
            </Styled.Right>
        </Styled.GridContainer>
        <div>
            <h2>Heading</h2>
            <p>Description</p>
        </div>

        </Styled.Page>
    )
};

export default Hero;