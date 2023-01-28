import React from "react";
import PieChart from ".";

const _mocks = {
    labels: ['Winner', 'Loser'],
    datasets: [ 
        {
            label: 'Trades',
            data: [12,20],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
    ],
  };

export default {
    title: "Components/PieChart",
    component: PieChart,
};

const template = (args) => <PieChart {...args} />;

export const Default = () => <PieChart {..._mocks} />;

export const Playground = template.bind({});
Playground.args = {
    ..._mocks,
};
