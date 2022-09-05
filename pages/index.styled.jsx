import styled from "styled-components";

export const Main = styled.main`
    padding: 0 20px 100px 20px;
`;
export const Section = styled.section`
    padding-top: 25px;
`;
export const Container = styled.div`
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
    img {
        width: 125px;
        height: 125px;
        border-radius: 50%;
        object-fit: cover;
    }
`;
export const Heading = styled.h1`
    margin: 0;
`;
export const SubHead = styled.h2`
    text-align: left;
   
`;
export const ExperienceList = styled.ul`
    margin: 0;
    padding: 0;
`;
export const AccordionContent = styled.div`
    border-bottom: 1px solid rgb(226,226,226);
    margin-bottom: 15px;
    padding-bottom: 15px;
`;

export const Description = styled.p`
    margin: 0;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 640px;
    svg {
        margin: 0 20px;
    }
`;