import React from 'react';
import * as Styled from './index.styled';
import Accordion from '../components/Accordion';
import { 
  ReactIcon,
  CssIcon,
  HtmlIcon,
  StyledComPonentIcon,
  MaterialUiIcon,
  RubyIcon,
  NextJsIcon,
  GithubIcon,
  LinkedInIcon,
  GmailIcon
} from '../public/icons';
import { accordionsMock } from './_mocks';
import parse from 'html-react-parser';

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
                  href={accordion.href}
                  >
                  <Styled.AccordionContent>{parse(accordion.content)}</Styled.AccordionContent>
                </Accordion>
            ))}
          </Styled.ExperienceList>
        </Styled.Container>
      </Styled.Section>
      {/* <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Portfolio</Styled.SubHead>
          <div>Card</div>
        </Styled.Container>
      </Styled.Section> */}
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Technologies</Styled.SubHead>
          <Styled.IconContainer>
            <ReactIcon {...iconStyle}/>
            <CssIcon {...iconStyle}/>
            <HtmlIcon {...iconStyle}/>
            <StyledComPonentIcon {...iconStyle}/>
            <MaterialUiIcon {...iconStyle}/>
            <NextJsIcon {...iconStyle}/>
            <RubyIcon {...iconStyle}/>
          </Styled.IconContainer>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Skills</Styled.SubHead>
          <Styled.SkillList>
            <li><b>Languages:</b> JavaScript (ES6+), C#, Python, Ruby on Rails </li>
            <li><b>Frameworks:</b> React, Next.js, Vue.js</li>
            <li><b>Libraries:</b> Redux Toolkit, Redux Saga, Styled Components, Material UI, Storybook</li>
            <li><b>Tools:</b> Git, GitHub, GitLab, Jira, Confluence, Trello, Figma, Adobe XD, Adobe Photoshop</li>
            <li><b>Database:</b> PostgreSQL, SQL, MongoDB</li>
            <li><b>Testing:</b> Jest, Storyshot</li>
          </Styled.SkillList>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Contact Me</Styled.SubHead>
          <Styled.IconContainer>
            <a href="https://github.com/Minhtality" target="_blank"><GithubIcon {...iconStyle}/></a>
            <a href="https://www.linkedin.com/in/minh-m-tran/" target="_blank"><LinkedInIcon {...iconStyle}/></a>
            <a href="mailto:mtran1712@gmail.com" target="_blank"><GmailIcon {...iconStyle}/></a>
          </Styled.IconContainer>
        </Styled.Container>
      </Styled.Section>
    </Styled.Main>
  )
}

export default index;
