import styled from "styled-components";

export const AccordionContainer = styled.li`
    list-style: none;
    scroll-margin-top: 15px;
`;

export const Accordion = styled.div`
    width: 100%;
    cursor: pointer;
    text-align: left;
    display: flex;
    margin-bottom: 15px;
    position: relative;
`;

export const Heading = styled.h3`
    margin: 0;
`;
export const Description = styled.p``;
export const Icon = styled.a`
    width: 100px;
    height: 100px;
    border: 1px solid rgb(226,226,226);
    border-radius: 12px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        min-width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
export const Close = styled.button`
    margin-left: auto;
    padding: 0;
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
    cursor: pointer;
    transition: all .5s ease-in-out;
    transform: ${({ show }) => show ? 'rotate(0deg)' : 'rotate(-90deg)'};
    align-self: center;
    border: none;
    background: transparent;
    svg {
        width: 100%;
        height: 100%;
    }
`;
export const AccordionContent = styled.div`
    max-height: ${({ show }) => show ? '600vh' : '0vh'};
    opacity: ${({ show }) => show ? '1' : '0'};
    overflow: hidden;
    perspective: 9999px;
    transform: ${({show}) => show ? 'translate3d(0, 0, 0)' : 'translate3d(0, -10px, 0)'};
    transform-style: preserve-3d;
    transition: all .7s ease;
    text-align: left;
    a {
        color: inherit;
        text-decoration: underline;
    }
    li {
        margin-bottom: 10px;
    }
`;