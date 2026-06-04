import Navbar from "./components/Navbar"
import Section from "./components/Section"

import Adddoctor from "./components/Adddoctor"
import { Route, Routes } from "react-router-dom"
import Doctordetails from "./components/Doctordetails"
// import Weather from "./components/Weather"
import { useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute"
// import { useEffect } from "react"
import useCounter from "./components/useCounter"
function App() {
  const {count,increment,decrement}=useCounter(0)
  const [islogin,setislogin]=useState(false)

  // let [count,setCount]=useState(0)
  // function addcount(){
  //   setCount(count+1)
  //   console.log(count)
  // }
  // useEffect(()=>{
  //   console.log('useeffect is running')
  // },[count])

  return (
    <div>
      {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dnc</button>
      
       {/* {count}
      <button  onClick={addcount}>click to increase</button>  */}
      {/* <Weather/> */}
      {/*
      
    protected routes

    usememo

    custom hooks

    error handling methods - try catch
      
      
      */}
      <Navbar/>
      <button onClick={()=>setislogin(true)}>click to login</button>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/add-doctor' element={
          <ProtectedRoute islogin={islogin}><Adddoctor/></ProtectedRoute>}/>
        <Route path='/doctor/:id' element={
          <ProtectedRoute islogin={islogin}><Doctordetails/></ProtectedRoute>
        }/>
      </Routes>
      {/* <Section/> */}
      {/* <div className='doctorcontainer'>
      <Doctorcard name='Vasavi' specialization='psychology' gender='female'/>
      <Doctorcard name='Vamsi' specialization='heart' gender='male'/>
      <Doctorcard name='Deja' specialization='muscles' gender='male'/>
      <Doctorcard name='Surya' specialization='ENT' gender='male'/>
      <Doctorcard name='Deekshit' specialization='cardio' gender='male'/>
      
      </div> */}
     {/* <Adddoctor/> */}
    </div>
  )
}

export default App