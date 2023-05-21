/* eslint-disable @next/next/no-img-element */
import React from 'react'
import * as Icons from '../../public/icons'
import Accordion from '../components/Accordion'
import parse from 'html-react-parser'
import Link from 'next/link'
import { accordionsMock, projectsMock, iconsMock } from '../components/_mocks'
import { AiOutlineGlobal, AiFillGithub } from 'react-icons/ai'
import * as Styled from '@styles/homepage.styled'

const index = () => {
  const iconStyle = {
    width: '50px',
    height: '50px'
  }

  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <Styled.Main>
      <Styled.Section>
        <Styled.Container>
          <Styled.Avatar src="/images/avatar.jpeg" />
          <Styled.Heading>Hello, I&apos;m Minh</Styled.Heading>
          <Styled.Description>
            Full Stack Developer, Los Angeles
          </Styled.Description>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Experience</Styled.SubHead>
          <Styled.ExperienceList>
            {accordionsMock.map(accordion => (
              <Accordion
                key={`accordion: ${accordion.title}`}
                heading={accordion.title}
                description={accordion.description}
                imgSrc={accordion.imageSrc}
                href={accordion.href}
              >
                <Styled.AccordionContent>
                  {parse(accordion.content)}
                </Styled.AccordionContent>
              </Accordion>
            ))}
          </Styled.ExperienceList>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Projects</Styled.SubHead>
          <Styled.ExperienceList>
            <Styled.ProjectContainer
              initial="hidden"
              animate="visible"
              variants={variant}
              transition={{
                staggerChildren: 0.2,
                delayChildren: 0.2
              }}
            >
              {projectsMock.map(project => (
                <Styled.ProjectCard key={project.title} variants={variant}>
                  <Styled.ImageContainer>
                    <Styled.ProjectImage
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      sizes="100vw"
                    />
                    <Styled.ProjectSource>
                      <Link
                        href={'https://frontend-coffee.vercel.app/'}
                        alt="good soup."
                        target={'_blank'}
                      >
                        <AiOutlineGlobal />
                      </Link>
                      <Link
                        href={'https://github.com/Minhtality/coffee'}
                        alt="source code"
                        target="_blank"
                      >
                        <AiFillGithub />
                      </Link>
                    </Styled.ProjectSource>
                  </Styled.ImageContainer>
                  <Styled.ProjectTitle>{project.title}</Styled.ProjectTitle>
                  <p>{project.description}</p>
                </Styled.ProjectCard>
              ))}
            </Styled.ProjectContainer>
          </Styled.ExperienceList>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Technologies</Styled.SubHead>
          <Styled.IconContainer>
            {iconsMock.map(icon => {
              const Icon = Icons[icon]
              return <Icon {...iconStyle} key={icon} />
            })}
          </Styled.IconContainer>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Skills</Styled.SubHead>
          <Styled.SkillList>
            <li>
              <b>Languages:</b> JavaScript (ES6+), C#, Python, Ruby on Rails{' '}
            </li>
            <li>
              <b>Frameworks:</b> React, Next.js, Vue.js, TypeScript
            </li>
            <li>
              <b>Libraries:</b> Redux Toolkit, Redux Saga, Styled Components,
              Material UI, Storybook
            </li>
            <li>
              <b>Tools:</b> Git, GitHub, GitLab, Jira, Confluence, Trello,
              Figma, Adobe XD, Adobe Photoshop
            </li>
            <li>
              <b>Database:</b> PostgreSQL, SQL, MongoDB
            </li>
            <li>
              <b>Testing:</b> Jest, Storyshot, React Testing Library
            </li>
          </Styled.SkillList>
        </Styled.Container>
      </Styled.Section>
      <Styled.Section>
        <Styled.Container>
          <Styled.SubHead>Contact Me</Styled.SubHead>
          <Styled.IconContainer>
            <a
              href="https://github.com/Minhtality"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.GithubIcon {...iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com/in/minh-m-tran/"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.LinkedInIcon {...iconStyle} />
            </a>
            <a
              href="mailto:dev@minhtality.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.GmailIcon {...iconStyle} />
            </a>
          </Styled.IconContainer>
        </Styled.Container>
      </Styled.Section>
    </Styled.Main>
  )
}

export default index
