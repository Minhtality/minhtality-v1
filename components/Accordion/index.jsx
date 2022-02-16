import React, { useState } from 'react';
import * as Styled from './index.styled';

const Accordion = ({
    heading = 'default heading',
    description = 'default description',
    imgSrc = '',
    children,
}) => {
    const [open, setOpen] = useState(false);
    const handleToggle = (e) => {
        setOpen(e => {
            const newState = !e;
            return newState;
        })
    };

    return (
        <>
            <Styled.Accordion onClick={handleToggle} aria-expanded={open}>
                <Styled.Icon></Styled.Icon>
                <div>
                    <Styled.Heading>{heading}</Styled.Heading>
                    <Styled.Description>{description}</Styled.Description>
                </div>
            </Styled.Accordion>
            <Styled.AccordionContent show={open}>
                {children}
            </Styled.AccordionContent>
        </>
    )
}

export default Accordion;