import { useEffect } from "react"
import { useState } from "react"
import Doctorcard from "./Doctorcard"
import axios from "axios"

function Home({newdoctor}) {

    let [doctors,setDoctors]=useState([])
    let [search,setSearch]=useState('')
    let [specialization,setSpecialization]=useState('')

   async  function fetchdata(){

            let val=await fetch('https://doc-back.onrender.com/doctors')
            let finaldata=await val.json()
        
            setDoctors(finaldata)

     }
    useEffect(()=>{
    fetchdata()
    },[])

    useEffect(()=>{
        // if(newdoctor){
        //     setDoctors((prev)=>[...prev,newdoctor])
        // }
        // console.log(search,specialization)
        fetchdata()

    },[newdoctor])

    const filterdata=doctors.filter((val)=>{
        console.log()
        return (val.name.toLowerCase().includes(search)
        &&
        (specialization=="" || specialization==val.specialization)
    )
    })

    async function deletedoctor(id){
        await axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
        fetchdata()
    }
    


  return (
   <div>
    <div className='filters'>
    <input type="text" value={search} placeholder='search your doctor'
    onChange={(e)=>setSearch(e.target.value)}  className='textfield'/>

    <select name="" id="" value={specialization}
    onChange={(e)=>setSpecialization(e.target.value)}>
        <option value="Muscles">muscles</option>
        <option value="Heart">heart</option>
        <option value="Bones">bones</option>
    </select>
    </div>
     <div  className='doctorcontainer'>
        {filterdata.length>0?filterdata.map((val)=>(
            <Doctorcard deletedoctor={deletedoctor} id={val.id} key={val.id} name={val.name} gender={val.gender} specialization={val.specialization}/>
        )): <h2>no doctors found</h2>}
    </div>
   </div>
  )
}

export default Home