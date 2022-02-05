import styled from "styled-components";

export const Page = styled.div`
    width: 100v%;
    height: 100%;
    /* padding: 0 100px; */
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
`;
export const Greeting = styled.div``;
export const AboutMe = styled.p`
    margin: 0;
`;