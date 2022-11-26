import React from "react";
import Card from "./index";

const _mocks = {
    title: "Card title",
    description: "Card description",
    thumbnail: "https://picsum.photos/1000/1500",
    avatar: "https://picsum.photos/1000/1500",
    author: "Author",
    date: "11/25/2022",
    tags: ["tag1", "tag2", "tag3"],
};

export default {
    title: "Components/Card",
    component: Card,
};

const template = (args) => <Card {...args} />;

export const Default = () => <Card {..._mocks} />;

export const Playground = template.bind({});
Playground.args = {
    ..._mocks,
};
