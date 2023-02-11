import styled from 'styled-components'

export const Card = styled.div`
  background-color: rgb(229, 229, 229);
  box-shadow: 3px 3px 2px -2px rgba(0, 0, 0, 0.5);
  padding: 25px 10px 20px;
  width: 500px;
  height: 500px;
  position: relative;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-family: 'Cedarville Cursive', cursive;
  margin: 20px;
  p {
    margin: 0;
  }
`
export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 85%;
  overflow: hidden;
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Date = styled.span`
  font-size: 10px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 10px;
`
export const MetaContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Author = styled.span`
  font-size: 10px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px 10px;
`

export const TagsContainer = styled.div`
  display: flex;
  span {
    padding: 0 5px;
  }
`
