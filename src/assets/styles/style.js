import styled from 'styled-components'

import bg from "../img/pattern-bg.png"
import { MapContainer} from 'react-leaflet'


export const ContainerMap = styled.div `
    width: 100%;
    
    
    overflow: hidden;

 & form{
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
    background-image: url(${bg});
    background-size: cover;
     padding: 2rem;
     padding-bottom: 7rem;
     

     h1{
         color: #fff;
         font-size: 2rem;
     }

     
     
 }
 & input{
    border-top-left-radius: 1rem;
     border-bottom-left-radius: 1rem;
     width: 90%;
     max-width: 500px;
     padding: .5rem;
     border: none;
 }
 & form div{
     margin-top: 2rem;
     display: flex;
     flex-direction: row;
     justify-content: center;
     width: 100%;
     
 }
 & form button{
     background-color: #191919;
     border-top-right-radius: 1rem;
     border-bottom-right-radius: 1rem;
     padding: .5rem;
     cursor: pointer;
     border: none;
 }
 & > button{
     background-color: rgb(69, 62, 153);
     padding: .5rem 2rem;
     border: none;
     position: fixed;
     bottom: 1rem;
     left: 1rem;
     border-radius: .5rem;
     z-index: 2;
     color: #fff;
     cursor: pointer;
     font-size: 1.5rem;
 }

 @media (max-width: 600px)
    {  
        form{
            padding: 2rem;
            padding-bottom: 9rem;
            padding-top: 1rem;
            
            div{
                margin-top: 1rem;
            }

            input{
                width: 100%;
            }
        }
    }
`

export const StyledMapContainer = styled(MapContainer) `
   width: 100%;
   height: calc(100vh - 16rem);
   z-index: 1;


   @media (max-width: 600px)
    {  
        height: calc(100vh - 16rem);
    }
`




