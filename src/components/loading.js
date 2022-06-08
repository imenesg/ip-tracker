import React from 'react';
import styled,{keyframes} from 'styled-components'
// import { Container } from './styles';


const animationLoading = keyframes`
 0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoad = styled.div`
    width: 100%;
    height: calc(100vh - 16rem);
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${animationLoading} .5s .1s  linear infinite;


    @media (max-width: 600px)
    {  
        height: calc(100vh - 15.875rem);
    }

`

function Loadng() {
  return(
    <StyledLoad>
      <i className='bx bxs-map-alt' style={{fontSize: "5rem", color: "rgb(69, 62, 153)"}}></i>
    </StyledLoad>
  );
}

export default Loadng;

