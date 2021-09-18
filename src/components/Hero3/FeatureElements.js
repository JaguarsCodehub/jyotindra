import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const FeatureContainer = styled.div`
    
    background-image: linear-gradient(to left bottom, #ffe9a0, #ffce87, #ffb278, #ff9472, #ff7676);
    height: 100vh;
    max-height: 400px;
    background-position: center;
    margin-top: 50px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    /* &::after{
        content: '';
        
        background: inherit;
        
        filter: blur(50rem);
    } */
    
`
export const FeatureH1 = styled.h1`
    font-size: clamp(2rem,5vw,4rem);
    color: #fff;
`
export const FeatureP = styled.p`
    margin-top: 20px;
    font-size: clamp(1rem,3vw,2rem);
    color: #fff;
`
export const FeatureButton = styled(Link)`
    font-size: 1.4rem;
    margin-top: 30px;
    padding: 1rem 3rem;
    border: none;
    background: #000;
    color: #fff;
    border-radius: 30px;
    transition: 0.2s ease-out;

    &:hover{
        color: #000;
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`