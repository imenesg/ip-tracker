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
        ip: "8.8.8.8",
        version: "IPv4",
        city: "Mountain View",
        region: "California",
        region_code: "CA",
        country: "US",
        country_name: "United States",
        country_code: "US",
        country_code_iso3: "USA",
        country_capital: "Washington",
        country_tld: ".us",
        continent_code: "NA",
        in_eu: false,
        postal: "94043",
        latitude: 37.42301,
        longitude: -122.083352,
        timezone: "America/Los_Angeles",
        utc_offset: "-0700",
        country_calling_code: "+1",
        currency: "USD",
        currency_name: "Dollar",
        languages: "en-US,es-US,haw,fr",
        country_area: 9629091.0,
        country_population: 327167434,
        asn: "AS15169",
        org: "GOOGLE"
    })

    function mudacidade(event) {
        event.preventDefault();
        
        fetch(
          `https://ipapi.co/${ip}/json/`
        )
          .then((resposta) => {
            
            if (resposta.status === 200) {
              return resposta.json();
            }else{
                alert("erro")
            }
          })
          .then((dados) => {
            console.log(dados.error);
            if(dados.error){
            alert(`Algo deu errado :(, por gentileja verifique seu IP :)`)
            ;
            }else{
                console.log(dados);
                setData(dados);
                setloadMap(null)
                
                setTimeout(() => {
                setloadMap(true)
            }, 1000)
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
        <StyledMapContainer center={[ data.latitude,  data.longitude]} zoom={13} scrollWheelZoom={true} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ data.latitude,  data.longitude]}>
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
