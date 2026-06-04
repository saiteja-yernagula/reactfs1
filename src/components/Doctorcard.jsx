import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DoctorContext } from './DoctorProvider'
function Doctorcard({name,specialization,gender,id,deletedoctor}) {
  let navigate=useNavigate()
  const {handleupdate}=useContext(DoctorContext)
  return (
    <div className='doctorcard'>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" width='100' height='100' alt="" />
        </div>
        <h1>{name}</h1>
        <div>{specialization}</div>
        <p>{gender}</p>
        <button onClick={()=>navigate(`/doctor/${id}`)}>View more</button>
        <button onClick={()=>deletedoctor(`${id}`)}>Delete</button>
        <button onClick={()=>handleupdate(`${id}`)}>update</button>
    </div>
  )
}

export default Doctorcard