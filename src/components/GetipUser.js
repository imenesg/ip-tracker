import { useEffect} from 'react';

function GetipUser(prop) {

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
           
            alert(`seu ip é ${dados.ip}`)
        }).then(() => prop.setgetip(null)); },[prop])
        
        
}

export default GetipUser;