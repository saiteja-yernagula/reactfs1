import React from 'react'
import { useParams } from 'react-router-dom'

function Doctordetails() {
    let {id}=useParams()
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
            let doctor=data.find((val)=>{
                return val.id==id
            })
        console.log(doctor);
        
            
  return (
    <div>
    <h1>Doctordetails</h1>
    <h1>{doctor.name}</h1>
    <h1>{doctor.gender}</h1>
    <h1>{doctor.specialization}</h1>
    <h1>{doctor.salary}</h1>
    <h1>{doctor.age}</h1>
    </div>
  )
}

export default Doctordetails