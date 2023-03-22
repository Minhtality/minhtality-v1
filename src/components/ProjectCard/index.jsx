import Image from 'next/image'

const ProjectCard = ({ title, description, image, href }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <img src="/images/homepage.png" alt="homepage" />
    </div>
  )
}

export default ProjectCard
