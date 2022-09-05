import React from 'react';
import * as Styled from './index.styled';
import Accordion from '../components/Accordion';
import { ReactIcon, CssIcon, HtmlIcon, StyledComPonentIcon } from '../public/icons';
import { accordionsMock } from './_mocks';

const index = () => {

const iconStyle = {
  width: '50px',
  height: '50px'
};

  return (
    <Styled.Main>
      <Styled.Section>
        <Styled.Container>
          <img src='/images/avatar.jpg' />
          <Styled.Heading>Hello, I'm Minh</Styled.Heading>
          <Styled.Description>Front End Developer, Los Angeles</Styled.Description>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Experience</Styled.SubHead>
          <Styled.ExperienceList>
            {accordionsMock.map((accordion, index) => (
                <Accordion 
                  key={`accordion: ${index}`}
                  heading={accordion.title} 
                  description={accordion.description}
                  imgSrc={accordion.imageSrc}
                  >
                  <Styled.AccordionContent>Hello World: {index + 1}</Styled.AccordionContent>
                </Accordion>
            ))}
          </Styled.ExperienceList>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Portfolio</Styled.SubHead>
          <div>Card</div>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Technologies</Styled.SubHead>
          <div>
            <ReactIcon {...iconStyle}/>
            <CssIcon {...iconStyle}/>
            <HtmlIcon {...iconStyle}/>
            <StyledComPonentIcon {...iconStyle}/>
          </div>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Contact Me</Styled.SubHead>
          <div>Lets's work together</div>
        </Styled.Container>
      </Styled.Section>
    </Styled.Main>
  )
}

export default index;
