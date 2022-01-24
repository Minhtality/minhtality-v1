import React from 'react';
import * as Styled from './index.styled';

const SimpleGallery = () => {
  return (
    <Styled.GridContainer>
      <Styled.Left>
        <Styled.CardContainer>
          <img
            src='https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
            alt='img1'
          />
        </Styled.CardContainer>
      </Styled.Left>
      <Styled.Right>
        <Styled.CardContainer>
          <img
            src='https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
            alt='img2'
          />
        </Styled.CardContainer>
        <Styled.CardContainer>
          <img
            src='https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
            alt='img3'
          />
        </Styled.CardContainer>
      </Styled.Right>
    </Styled.GridContainer>
  );
};

export default SimpleGallery;
