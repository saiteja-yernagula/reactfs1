import { useNavigate } from 'react-router-dom'
import './styles.css'

function Navbar() {
  let navigate=useNavigate()
  return (
    <nav>
        <h1>Doctor App</h1>
        <h3>
          <div>
            <button onClick={()=>navigate('/')}>Home</button>
          </div>
          <div>
            <button onClick={()=>navigate('/add-doctor')}>Add doctor</button>
          </div>
        </h3>
    </nav>
  )
}

export default Navbar