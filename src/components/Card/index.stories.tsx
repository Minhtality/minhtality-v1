import React from 'react'
import Card from './index'

const _mocks = {
  title: 'Create A Polaroid Card with CSS',
  thumbnail: 'https://picsum.photos/1000/1500',
  avatar: 'https://picsum.photos/1000/1500',
  author: 'Minh Tran',
  date: '11/25/2022',
  tags: ['React', 'Blog', 'CSS']
}

export default {
  title: 'Components/Card',
  component: Card
}

const template = args => <Card {...args} />

export const Default = () => <Card {..._mocks} />

export const Playground = template.bind({})
Playground.args = {
  ..._mocks
}
