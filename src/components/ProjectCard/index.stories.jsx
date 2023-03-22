import ProjectCard from '.'

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard
}

const Template = args => <ProjectCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Project Title',
  description: 'Project Description',
  image: '/images/homepage.png',
  href: 'https://www.google.com'
}
