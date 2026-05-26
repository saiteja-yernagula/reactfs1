import { useEffect } from "react"
import { useState } from "react"
import Doctorcard from "./Doctorcard"


function Home({newdoctor}) {

    let [doctors,setDoctors]=useState([])

     function fetchdata(){
     let data = [
                {
                    id: 1,
                    name: "Teja",
                    age: 26,
                    gender: "Male",
                    specialization: "Muscles",
                    salary: 7000000
                },
                {
                    id: 2,
                    name: "Sam",
                    age: 26,
                    gender: "Male",
                    specialization: "Bones",
                    salary: 4000000
                },
                {
                    id: 3,
                    name: "Anu",
                    age: 25,
                    gender: "Female",
                    specialization: "Heart",
                    salary: 5000000
                }
            ]
            setDoctors(data)

     }
    useEffect(()=>{
    fetchdata()
    },[])

    useEffect(()=>{
        if(newdoctor){
            setDoctors((prev)=>[...prev,newdoctor])
        }
    },[newdoctor])
  return (
    <div  className='doctorcontainer'>
        {doctors.map((val)=>(
            <Doctorcard key={val.id} name={val.name} gender={val.gender} specialization={val.specialization}/>
        ))}
    </div>
  )
}

export default Home