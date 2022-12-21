import React from "react";
import * as Icons from "../../public/icons";
import Accordion from "../components/Accordion";
import parse from "html-react-parser";
import styled from "styled-components";
import { accordionsMock, iconsMock } from "../components/_mocks";

const Main = styled.main`
    padding: 0 20px 100px 20px;
`;
const Section = styled.section`
    padding-top: 25px;
`;
const Container = styled.div`
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
`;
const Avatar = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 10px;
`;
const Heading = styled.h1`
    margin: 0;
    margin-bottom: 10px;
`;
const SubHead = styled.h2`
    text-align: left;
`;
const ExperienceList = styled.ul`
    margin: 0;
    padding: 0;
`;
const AccordionContent = styled.div`
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-bottom: 15px;
    padding-bottom: 15px;
    font-size: 14px;
`;

const Description = styled.p`
    margin: 0;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 640px;
    svg {
        margin: 0 20px;
    }
`;

const SkillList = styled.ul`
    margin: 0;
    padding: 0;
    font-size: 14px;
    list-style: none;
    text-align: left;
    li {
        margin: 0 0 10px 0;
    }
    b {
        text-decoration: underline;
    }
`;

const index = () => {
    const iconStyle = {
        width: "50px",
        height: "50px",
    };

    return (
        <Main>
            <Section>
                <Container>
                    <Avatar src="/images/avatar.jpeg" />
                    <Heading>Hello, I'm Minh</Heading>
                    <Description>Front End Developer, Los Angeles</Description>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SubHead>Experience</SubHead>
                    <ExperienceList>
                        {accordionsMock.map((accordion) => (
                            <Accordion
                                key={`accordion: ${accordion.title}`}
                                heading={accordion.title}
                                description={accordion.description}
                                imgSrc={accordion.imageSrc}
                                href={accordion.href}
                            >
                                <AccordionContent>
                                    {parse(accordion.content)}
                                </AccordionContent>
                            </Accordion>
                        ))}
                    </ExperienceList>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SubHead>Technologies</SubHead>
                    <IconContainer>
                        {iconsMock.map((icon) => {
                            const Icon = Icons[icon];
                            return <Icon {...iconStyle} key={icon} />;
                        })}
                    </IconContainer>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SubHead>Skills</SubHead>
                    <SkillList>
                        <li>
                            <b>Languages:</b> JavaScript (ES6+), C#, Python,
                            Ruby on Rails{" "}
                        </li>
                        <li>
                            <b>Frameworks:</b> React, Next.js, Vue.js,
                            TypeScript
                        </li>
                        <li>
                            <b>Libraries:</b> Redux Toolkit, Redux Saga, Styled
                            Components, Material UI, Storybook
                        </li>
                        <li>
                            <b>Tools:</b> Git, GitHub, GitLab, Jira, Confluence,
                            Trello, Figma, Adobe XD, Adobe Photoshop
                        </li>
                        <li>
                            <b>Database:</b> PostgreSQL, SQL, MongoDB
                        </li>
                        <li>
                            <b>Testing:</b> Jest, Storyshot, React Testing
                            Library
                        </li>
                    </SkillList>
                </Container>
            </Section>
            <Section>
                <Container>
                    <SubHead>Contact Me</SubHead>
                    <IconContainer>
                        <a href="https://github.com/Minhtality" target="_blank">
                            <Icons.GithubIcon {...iconStyle} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/minh-m-tran/"
                            target="_blank"
                        >
                            <Icons.LinkedInIcon {...iconStyle} />
                        </a>
                        <a href="mailto:dev@minhtality.com" target="_blank">
                            <Icons.GmailIcon {...iconStyle} />
                        </a>
                    </IconContainer>
                </Container>
            </Section>
        </Main>
    );
};

export default index;
