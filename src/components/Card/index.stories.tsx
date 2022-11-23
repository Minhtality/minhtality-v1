import React from 'react'
import Card from './index'

const _mocks = {
    title: 'Card title',
    description: 'Card description',
    thumbnail: 'https://picsum.photos/200/300',
    avatar: 'https://picsum.photos/200/300',
    author: 'Author',
    date: '2021-01-01',
    tags: ['tag1', 'tag2', 'tag3'],
}

export default {
    title: 'Components/Card',
    component: Card,
}

const template = (args) => <Card {...args} />

export const Default = () => <Card {..._mocks} />

export const Playground = template.bind({})
Playground.args = {
    ..._mocks,
}
