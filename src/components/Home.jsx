import { useEffect } from "react"\
import { useState } from "react"


function Home() {

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
        

     }
    useEffect(()=>{
    fetchdata()
    },[])
  return (
    <div>
        home cards
        
    </div>
  )
}

export default Home