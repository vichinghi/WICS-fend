import React, { useState,useEffect } from 'react';
import { GoogleMap, withScriptjs,withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
 import { getIncidence } from '../data';

const Map = ({crimeData})=>{
    const [location1, setData] = useState(null);
     const [data, setDatag] = useState(null);

    useEffect(()=>{
        getIncidence()
        .then((res)=>{
            setDatag(res)
        })

      },[]);

    return(
        <div className="map">
            <GoogleMap
            defaultCenter={{ lat: 0.347596, lng: 32.582520 }}
            defaultZoom={3}
            >
            {crimeData&&crimeData.map((result)=>{
               return (result.location&&result.location.lat&&<Marker
               key={result.id}
               position ={{lat:result.location.lat,lng:result.location.lng }}
               onClick={()=>{setData(result)}}
               />)
            })}
             {location1&&location1.location &&location1.location.lat &&(
               <InfoWindow
               position ={{lat:location1.location.lat,lng:location1.location.lng }}
               >
<div>
<div>
               {location1.where_it_happend}
               </div>
               <div> {location1.what_happened}  </div>
</div>

               </InfoWindow>) }
            </GoogleMap>
        </div>
    )

}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap