import  { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Doctordetails() {
    let {id}=useParams()
    let [doctor,setDoctor]=useState(null)

   async function fetchdata(){
    let val=await axios.get('https://doc-back.onrender.com/doctors')
    console.log(val.data )

       let doc=val.data.find((val)=>{
           return val.id==id
       })
       setDoctor(doc)

       console.log(doc)
   }
      
     useEffect(()=>{
        fetchdata()
       },[]) 
            
  return (
    <div>
    <h1>Doctordetails</h1>
    <h1>{doctor && (<div>{doctor.name}</div>)}</h1>
    <h1>{doctor && (<div>{doctor.gender}</div>)}</h1>
    <h1>{doctor && (<div>{doctor.salary}</div>)}</h1>
    <h1>{doctor && (<div>{doctor.specialization}</div>)}</h1>
 
    </div>
  )
}

export default Doctordetails