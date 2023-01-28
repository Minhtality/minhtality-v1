import React from "react";
import PLCard from ".";

const _mocks = {
    
};

export default {
    title: "Components/Card",
    component: PLCard,
};

const template = (args) => <PLCard {...args} />;

export const Default = () => <PLCard {..._mocks} />;

export const Playground = template.bind({});
Playground.args = {
    ..._mocks,
};
