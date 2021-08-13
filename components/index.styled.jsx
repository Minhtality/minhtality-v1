import styled from 'styled-components';

export const ParticleStyle = styled.div`
    background: linear-gradient(-90deg, rgb(67, 206, 162) 0%, rgb(24, 90, 157) 100%);
    height: 100%;
    display: block;
`;

export const Card = styled.button`
    background: linear-gradient(45deg, rgba(14,121,228,.1) 25%, rgb(67, 206, 162) 100%);
    box-shadow: 20px 30px 30px rgba(0,0,0,.1);
    width: 320px;
    height: 520px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    border: none;
    padding: 0;
    color: #fff;
    font-family: 'Raleway', sans-serif;
`;
export const CardContainer = styled.div`
    position: relative;
    perspective: 100em;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;
export const CardFront = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;
export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 25px;
    margin-top: 25px;
`;
export const Name = styled.h1`
    margin: 0;
    margin-bottom: 5px;
    font-size: 50px;
`;
export const Title = styled.div`
    margin-bottom: 5px;
    font-size: 20px;
`;
export const Location = styled.div`
    font-size: 20px;
    margin-bottom: 40px;
`;
export const Socials = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
    a {
        padding: 5px;
    }
`;
export const SocialIcons = styled.img`
    width: 40x;
    height: 40px;
`;

export default {};