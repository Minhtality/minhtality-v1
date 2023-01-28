import styled from 'styled-components'

export const ChartContainer = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    p {
        margin: 0;
    }
`;

export const WinrateContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: ${({winRate}) => winRate > 49 ? 'rgba(75, 192, 192, .8)' : 'rgba(255, 99, 132, .8)'};
`;

