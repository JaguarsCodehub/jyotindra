import styled from 'styled-components'

export const ServicesContainer = styled.div`
  margin-top: 200px;
  /* padding-top: 300px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;


  @media screen and (max-width: 768px) {
      height: 1100px;
      overflow: hidden;
  }

  @media screen and (max-width: 480px) {
      height: 1300px;
  }

`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  background-color: #000;



  @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }


`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;


  &:hover{
      transform: scale(1.05);
      /* background: #80FD75; */
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  }

`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  background-color: #fff;


`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  background-color: #000;

  @media screen and (max-width: 480px) {
      font-size: 2rem;
      margin-top: 30px;
  }
`


export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  background-color: #fff;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  background-color: #fff;
`