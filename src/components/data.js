import axios from 'axios'

export const getLocation=async(location)=> {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${`AIzaSyC2bnEImkMYXH2hC5sNrvFkaySOB6qfhz4`}
    `);

    return response
  } catch (error) {

    return error
  }
}
export const getIncidence= async()=> {

  try {
    let newData;
    const response = await axios.get(`https://wics.herokuapp.com/incident`)

    newData=response.data.incidents

    response.data.incidents.map(async(result)=>{

     const loc= await getLocation(result.where_it_happend)
     if(loc.data.results.length>0){
       newData.map((res)=>{
         res.location={}

         if (res.id==result.id){
           res.location=loc.data.results[0].geometry.location
         }

       })
     }
    })

    return newData
  } catch (error) {

    return error
  }
}
