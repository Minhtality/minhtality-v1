import styled from 'styled-components'

export const InfoContainer = styled.aside`
  width: 100%;
  height: 100%;
  margin: 50px 0;
  background-color: rgb(199, 177, 166);
  border-radius: 5px;
  border-left: 4px solid #6c504d;
  position: relative;

  p {
    margin: 10px 0;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -45%);
  background-color: #f0e7db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
    height: 30px;
  }
`
export const Content = styled.div`
  padding: 40px;
  height: 100%;
`
