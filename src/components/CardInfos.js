import React from 'react';
import styled from 'styled-components'

const Cardinfo = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 1rem;
    padding: 1rem;
    width: 90%;
    max-width: 900px;
    background-color: #fff;

    position: absolute;
    z-index: 3;

    margin-top: -4rem;

    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    section{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            color: #9D9D9D;
            font-size: 1rem;
            
        }
        h3{
            color: #000;
            font-size: 1.5rem;
            font-weight: 200;
            
        }
       
       
    }


    @media (max-width: 600px)
    {  margin-top: -8.5rem;
        flex-direction: column;
     div{
       align-items: center;
       justify-content: center;

       h3{
        margin-bottom:.5rem;
       }
    }
    }
`

function CardInfos({data}) {
  return(
    <Cardinfo>
        <section>
            <h2>Endereço IP</h2>
            <h3>{data.ip}</h3>
        </section>

        <section>
            <h2>Local</h2>
            <h3>{data.city}</h3>
            <h3>{data.region}{data.country_code}</h3>
        </section>

        <section>
            <h2>Moeda</h2>
            <h3>{data.currency_name}</h3>
        </section>

        <section>
            <h2>Provedora</h2>
            <h3>{data.org}</h3>
        </section>
    </Cardinfo>
  );
}

export default CardInfos;