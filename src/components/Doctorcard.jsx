import './styles.css'
function Doctorcard({name,specialization,gender}) {
  return (
    <div className='doctorcard'>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" width='100' height='100' alt="" />
        </div>
        <h1>{name}</h1>
        <div>{specialization}</div>
        <p>{gender}</p>
        <button>View more</button>
    </div>
  )
}

export default Doctorcard