import { TileLayer, Marker, Popup} from 'react-leaflet'
import {React , useState} from 'react'
import Loading from "./loading"

import GetipUser from './GetipUser'
import 'boxicons'
import {ContainerMap, StyledMapContainer} from "../assets/styles/style.js"




function Map() {

    const [getip, setgetip] = useState(null)

    const [loadMap, setloadMap] = useState(true)

    const [ip , setIp] = useState("")

    const [data, setData] = useState({
        geoplugin_request:"185.35.50.4",
        geoplugin_status:206,
        geoplugin_delay:"1ms",
        geoplugin_credit:"Some of the returned data includes GeoLite data created by MaxMind, available from.",
        geoplugin_city:"",
        geoplugin_region:"",
        geoplugin_regionCode:"",
        geoplugin_regionName:"",
        geoplugin_areaCode:"",
        geoplugin_dmaCode:"",
        geoplugin_countryCode:"GB",
        geoplugin_countryName:"United Kingdom",
        geoplugin_inEU:0,
        geoplugin_euVATrate:false,
        geoplugin_continentCode:"EU",
        geoplugin_continentName:"Europe",
        geoplugin_latitude:"51.4964",
        geoplugin_longitude:"-0.1224",
        geoplugin_locationAccuracyRadius:"200",
        geoplugin_timezone:"Europe London",
        geoplugin_currencyCode:"GBP",
        geoplugin_currencySymbol:"£",
        geoplugin_currencySymbol_UTF8:"£",
        geoplugin_currencyConverter:0.7947
    })

    function mudacidade(event) {
        event.preventDefault();
        
        fetch(
          `http://www.geoplugin.net/json.gp?ip=${ip}`
        )
          .then((resposta) => {
            
            if (resposta.status === 200) {
              return resposta.json();
            }else{
                alert("erro")
            }
          })
          .then((dados) => {
            console.log(dados);
            if(dados){
                setData(dados);
                setloadMap(null)
                
                setTimeout(() => {
                setloadMap(true)
            }, 1000);
            }else{
                alert(`Algo deu errado :(, por gentileja verifique seu IP :)`)
            }
            
          }); 
      }

    function funOnChange(e){
        setIp(e.target.value)
    }

    
return(
   
    <ContainerMap>
    

    <form onSubmit={mudacidade}>
        <h1>Rastreador de IP</h1>

        <div>
            <input type='text'  value={ip} placeholder="Digite seu IP" onChange={funOnChange}></input>

            <button  type="submit" ><box-icon color="#fff" name='chevron-right'></box-icon></button>
        </div>
        
    </form>
        
    {loadMap ? (<>    
        <StyledMapContainer center={[ data.geoplugin_latitude,  data.geoplugin_longitude]} zoom={13} scrollWheelZoom={true} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ data.geoplugin_latitude,  data.geoplugin_longitude]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </StyledMapContainer></>
    ) : (<Loading></Loading>)}
    
   <button  onClick={() => {setgetip(!getip);console.log("passou aqui");}}>Qual meu IP?</button>

    {getip ? (<GetipUser setgetip={setgetip}></GetipUser>) : (null)}

   </ContainerMap>
   
)}
  

export default Map;
