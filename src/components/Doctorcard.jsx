import './styles.css'
import { useNavigate } from 'react-router-dom'
function Doctorcard({name,specialization,gender,id,deletedoctor,handleupdate}) {
  let navigate=useNavigate()
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