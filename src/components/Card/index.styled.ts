import styled from 'styled-components';

export const Card = styled.div`
    background-color: rgb(229,229,229);
    box-shadow: 0 4px 2px -2px rgba(0,0,0,0.8);
    max-width: 320px;
    height: 480px;
    max-height:  480px;
    padding: 15px 10px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
`

export const ThumbnailContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 380px;
    overflow: hidden;
`
export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Date = styled.span`
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 5px;
    font-weight: 600;
    font-family: 'Cedarville Cursive', cursive;
`