
import { createContext,useState } from "react"
import axios from "axios"

export const DoctorContext=createContext()
function DoctorProvider({children}) {
    const [newdoctor,setNewdoctor]=useState(null)
  async function handleupdate(id){
      const updateddata={
        name:'john',
        age:24,
        gender:'male',
        specialization:"Heart",
         salary:9000000
      }
      await axios.put(`https://doc-back.onrender.com/doctors/${id}`,updateddata)
      setNewdoctor(null)
    }
  return (
    
  )
}

export default DoctorProvider