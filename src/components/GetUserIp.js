import { useEffect, useState} from 'react';
import styled from 'styled-components'


export const Modal = styled.div`
  position: fixed;  

  height: 100vh;
  width: 100%;


  top: 0;
  left: 0;
  bottom: 0;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 3;

  background-color: rgba(255,255,255, 0.9);

  &>div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
     max-height: 100%;
     max-width: 900px;
     position: relative;
     background-color: #fff;
     flex-direction:column;
     border-radius: 1rem;

     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
     font-size: 1.5rem;
     i{
      background-color: unset;
      width: unset;
      text-align: end;
      position: absolute;
      top: -.5rem;
      right: -.5rem;
      cursor: pointer;
      border-radius: 50%;
      font-size: 2rem;
        background-color: #453E99;
        color: #fff;
     }
  }
`
function GetipUser(prop) {
const [message, setMessage] = useState(null)

  useEffect(()=>{
    fetch(
        `https://api.ipify.org?format=json`
      )
        .then((resposta) => {
          if (resposta.status === 200) {
            return resposta.json();
          }
        })
        .then((dados) => {
           
            /*alert(`Seu ip é ${dados.ip}`)*/
            setMessage(`🗺️Seu ip é ${dados.ip}🧭`)
        }); },[prop])

        if(message){
          return(
          <Modal>

            <div><i className='bx bx-x' onClick={() => prop.setgetip(!prop.getip)}></i>{message}</div>
            
          </Modal>)
        }
        else{
          return(
            <Modal>
  
              <div> Aguarde...</div>
              
            </Modal>)
        }
}

export default GetipUser;