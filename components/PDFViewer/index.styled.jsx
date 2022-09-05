import styled from "styled-components";

export const PDFContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    .react-pdf__Document {
        width: 100%;
        pointer-events: none;
        overflow: hidden;
    }
    canvas {
        margin: 0 auto;
        width: 40% !important;
        height: auto !important;
    }
`;