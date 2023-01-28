import React from 'react'
import * as Styled from './index.styled'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({labels, datasets}) => {
    // shortQuantity
    // longQuantity
    // symbol *unique
    // instrument.underlyingSymbol is the ticket

    const transformProps = {
        datasets: datasets
    }

    const winRate = Math.floor((datasets[0].data[0] / (datasets[0].data[0] + datasets[0].data[1])) * 100)

  return (
    <Styled.ChartContainer>
      <Doughnut data={transformProps}/>
      <Styled.WinrateContainer winRate={winRate}>
        <p>Win Rate</p>
        <p>{winRate}%</p>
      </Styled.WinrateContainer>
    </Styled.ChartContainer>
  )
}

export default PieChart