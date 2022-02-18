import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    ${({fill}) => fill && `fill: ${fill}`};
`

export const Arrow = ({ title = 'Arrow Icon', ...props }) =>
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13.39 7.45"
    ariaLabeledBy="title"
    {...props}
  >
    <title>{title}</title>
    <polygon points="13.39 0.76 12.63 0 6.7 5.94 0.76 0 0 0.76 6.7 7.45 6.7 7.45 6.7 7.45 13.39 0.76" />
  </SVG>;
