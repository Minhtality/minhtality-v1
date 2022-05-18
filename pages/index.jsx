import React from 'react';
import * as Styled from './index.styled';
import Accordion from '../components/Accordion';
import { ReactIcon, HtmlIcon, StyledComPonentIcon } from '../public/icons';

const index = () => {
  const accordions = [
  {
    imageSrc: '',
    title: 'App 1',
    description: 'First application',
    content: 'This is the accordion content'
  },
  {
    imageSrc: '',
    title: 'App 2',
    description: 'Second application',
    content: 'This is the accordion content 2'
  },
  {
    imageSrc: '',
    title: 'App 3',
    description: 'Third application',
    content: 'This is the accordion content 3'
  },
];

const iconStyle = {
  width: '50px',
  height: '50px'
};

  return (
    <Styled.Main>
      <Styled.Section>
        <Styled.Container>
          <img src='/images/giphy.gif' />
          <Styled.Heading>Hello, I'm Minh</Styled.Heading>
          <Styled.Description>Front-End Developer, Los Angeles</Styled.Description>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Experience</Styled.SubHead>
          <Styled.ExperienceList>
            {accordions.map((accordion, index) => (
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
