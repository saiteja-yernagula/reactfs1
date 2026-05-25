import Navbar from "./components/Navbar"
import Section from "./components/Section"

import Doctorcard from "./components/Doctorcard"
import Adddoctor from "./components/Adddoctor"
function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>

      <Doctorcard name='Vasavi' specialization='psychology' gender='female'/>
      <Doctorcard name='Vamsi' specialization='heart' gender='male'/>
      <Doctorcard name='Deja' specialization='muscles' gender='male'/>
      <Doctorcard name='Surya' specialization='ENT' gender='male'/>
      <Doctorcard name='Deekshit' specialization='cardio' gender='male'/>
      
      </div>
      <Adddoctor/>
    </div>
  )
}

export default App