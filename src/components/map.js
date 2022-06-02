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
        query: "185.35.50.4",
        continent: "Europe",
        continentCode: "EU",
        country: "United Kingdom",
        countryCode: "GB",
        region: "ENG",
        regionName: "England",
        city: "Great Bentley",
        district: "",
        lat: 51.8533,
        lon: 1.06379,
        timezone: "Europe/London",
        currency: "GBP",
        isp: "The Random House Group Limited",
        org: "Penguin Random House Public Addresses",
        as: "AS200164 The Random House Group Limited",
        asname: "RHG-AS",
    })

    function mudacidade(event) {
        event.preventDefault();
        
        fetch(
          `http://ip-api.com/json/${ip}`
        )
          .then((resposta) => {
            if (resposta.status === 200) {
              return resposta.json();
            }else{
                alert("erro")
            }
          })
          .then((dados) => {

            if(dados.status === "success"){
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
        <StyledMapContainer center={[ data.lat,  data.lon]} zoom={13} scrollWheelZoom={true} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ data.lat,  data.lon]}>
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
