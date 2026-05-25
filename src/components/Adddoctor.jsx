import { useState } from 'react'

function Adddoctor() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [specialization,setSpecialization]=useState('')
    const [salary,setSalary]=useState('')
    function handleform(e){
        e.preventDefault()
        const formdata={
          name,age,gender,specialization,salary
        }
        console.log(formdata)
        setName('')
        setAge('')
        setGender('')
        setSpecialization('')
        setSalary('')
    }
  return (
    <div className='formcontainer'>
      <h1>Add doctor</h1>


    <form onSubmit={handleform}>
        <input type="text" className='textfield' value={name} 
        placeholder='Enter Doctor Name' onChange={e=>setName(e.target.value)} />

        <input type="number" className='textfield' value={age} 
        placeholder='Enter Age' onChange={e=>setAge(e.target.value)} />

        <select name="" className="textfield" value={gender} onChange={e=>setGender(e.target.value)}>
          <option value="" disabled>Select your gender</option>
          <option value="male" >male</option>
          <option value="female" >female</option>
        </select>

   <input type="text" className='textfield' value={specialization} 
        placeholder='Enter specialization' onChange={e=>setSpecialization(e.target.value)} />

        <input type="number" className='textfield' value={salary} 
        placeholder='Enter Salary' onChange={e=>setSalary(e.target.value)} />

        <button type='submit'>ADD</button>
    </form> 
    </div>
  )
}

export default Adddoctor