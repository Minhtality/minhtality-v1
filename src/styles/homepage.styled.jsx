import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  padding: 0 20px 100px 20px;
`
export const Section = styled.section`
  padding-top: 50px;
`
export const Container = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
`
export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`
export const Heading = styled.h1`
  margin: 0;
  margin-bottom: 10px;
`
export const SubHead = styled.h2`
  text-align: left;
  text-underline-offset: 6px;
  text-decoration: underline 4px rgb(127, 0, 25);
`
export const ExperienceList = styled.ul`
  margin: 0;
  padding: 0;
`
export const AccordionContent = styled.div`
  border-bottom: 1px solid rgb(226, 226, 226);
  margin-bottom: 15px;
  padding-bottom: 15px;
  font-size: 14px;
`

export const Description = styled.p`
  margin: 0;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 640px;
  svg {
    margin: 0 20px;
    fill: rgb(127, 0, 25);
  }
`

export const SkillList = styled.ul`
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
    text-underline-offset: 3px;
  }
`
export const ProjectContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`
export const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-bottom: 0.5rem;
  }
`
export const ImageContainer = styled(motion.div)`
  position: relative;
  margin-bottom: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ProjectSource = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 0 0 10px 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    color: white;
  }
  span {
    margin-left: 5px;
  }
`

export const ProjectImage = styled.img`
  border-radius: 10px;
`

export const ProjectTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
`
