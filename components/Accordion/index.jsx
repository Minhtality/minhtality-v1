import React, { useState, useRef } from 'react';
import * as Styled from './index.styled';
import { Arrow, LexusIcon } from '../../public/icons/index';

const Accordion = ({
    heading = 'default heading',
    description = 'default description',
    imgSrc = '',
    href = '',
    children,
}) => {
    const [open, setOpen] = useState(false);
    const accordionRef = useRef();
    const handleToggle = (event) => {
        event.preventDefault();
        accordionRef.current.scrollIntoView({behavior: 'smooth'})
        setOpen(prevState => {
            const newState = !prevState;
            return newState;
        })
    };

    return (
        <Styled.AccordionContainer ref={accordionRef}>
            <Styled.Accordion onClick={handleToggle} aria-expanded={open}>
                <Styled.Icon href={href} target="_blank">
                    <img src={imgSrc}/>
                </Styled.Icon>
                <div>
                    <Styled.Heading>{heading}</Styled.Heading>
                    <Styled.Description>{description}</Styled.Description>
                </div>
                    <Styled.Close show={open}><Arrow /></Styled.Close>
            </Styled.Accordion>
            <Styled.AccordionContent show={open}>
                {children}
            </Styled.AccordionContent>
        </Styled.AccordionContainer>
    )
}

export default Accordion;